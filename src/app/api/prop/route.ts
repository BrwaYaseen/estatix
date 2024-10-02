import { NextResponse } from "next/server";
import { db } from "@/db/db";
import { eq } from "drizzle-orm";
import { propertyTable } from "@/db/schema";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (id) {
      // Fetch a single property by ID
      const property = await db
        .select()
        .from(propertyTable)
        .where(eq(propertyTable.id, parseInt(id)))
        .execute();

      if (property.length === 0) {
        return NextResponse.json(
          { message: "Property not found" },
          { status: 404 }
        );
      }

      return NextResponse.json(property[0]);
    } else {
      // Fetch all properties
      const allProperties = await db.select().from(propertyTable).execute();
      return NextResponse.json(allProperties);
    }
  } catch (error) {
    console.error("Error fetching properties:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate the required fields
    const requiredFields = ["title", "description", "price", "location"];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { message: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Insert the new property
    const newProperty = await db.insert(propertyTable).values(body).returning();

    return NextResponse.json(newProperty[0], { status: 201 });
  } catch (error) {
    console.error("Error creating property:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
