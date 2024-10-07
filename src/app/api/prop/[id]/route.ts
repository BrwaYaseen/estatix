import { eq, and } from "drizzle-orm";
import { NextResponse } from "next/server";
import { propertyTable } from "@/db/schema";
import { db } from "@/db/db";
import { getUserFromRequest } from "@/lib/get-user-from-request";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const user = await getUserFromRequest(request);
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const id = Number(params.id);
    const property = await db.query.propertyTable.findFirst({
      where: and(eq(propertyTable.id, id), eq(propertyTable.userId, user.id)),
    });

    if (!property) {
      return NextResponse.json(
        { error: "Property not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(property);
  } catch (error) {
    console.error("Error fetching property:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const user = await getUserFromRequest(request);
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const id = Number(params.id);
    const deletedProperty = await db
      .delete(propertyTable)
      .where(and(eq(propertyTable.id, id), eq(propertyTable.userId, user.id)))
      .returning();

    if (deletedProperty.length === 0) {
      return NextResponse.json(
        { error: "Property not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Property deleted successfully" });
  } catch (error) {
    console.error("Error deleting property:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const user = await getUserFromRequest(request);
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const id = Number(params.id);
    const body = await request.json();

    const allowedFields = [
      "name",
      "description",
      "area",
      "bed",
      "bath",
      "price",
      "city",
    ];
    const filteredBody = Object.fromEntries(
      Object.entries(body).filter(([key]) => allowedFields.includes(key))
    );

    const updatedProperty = await db
      .update(propertyTable)
      .set(filteredBody)
      .where(and(eq(propertyTable.id, id), eq(propertyTable.userId, user.id)))
      .returning();

    if (updatedProperty.length === 0) {
      return NextResponse.json(
        { error: "Property not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedProperty[0]);
  } catch (error) {
    console.error("Error updating property:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
