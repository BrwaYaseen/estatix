import { NextResponse } from "next/server";
import { db } from "@/db/db";
import { eq } from "drizzle-orm";
import { propertyTable } from "@/db/schema";
import { getUserFromRequest } from "@/lib/get-user-from-request";

export async function GET(request: Request) {
  try {
    const user = await getUserFromRequest(request);
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (id) {
      const property = await db.query.propertyTable.findFirst({
        where: eq(propertyTable.id, parseInt(id)),
      });

      if (!property) {
        return NextResponse.json(
          { error: "Property not found" },
          { status: 404 }
        );
      }

      return NextResponse.json(property);
    } else {
      const allProperties = await db.query.propertyTable.findMany({
        where: eq(propertyTable.userId, user.id),
      });
      return NextResponse.json(allProperties);
    }
  } catch (error) {
    console.error("Error fetching properties:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const user = await getUserFromRequest(request);
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();

    const requiredFields = [
      "name",
      "description",
      "area",
      "bed",
      "phoneNumber",
      "bath",
      "price",
      "city",
    ];
    const missingFields = requiredFields.filter((field) => !body[field]);

    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(", ")}` },
        { status: 400 }
      );
    }

    const newProperty = await db
      .insert(propertyTable)
      .values({
        ...body,
        userId: user.id,
      })
      .returning();

    return NextResponse.json(newProperty[0], { status: 201 });
  } catch (error) {
    console.error("Error creating property:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
