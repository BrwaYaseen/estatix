import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";
import { propertyTable } from "@/db/schema";
import { db } from "@/db/db";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number(params.id);
    const property = await db.query.propertyTable.findFirst({
      where: eq(propertyTable.id, id),
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
    const id = Number(params.id);
    const deletedProperty = await db
      .delete(propertyTable)
      .where(eq(propertyTable.id, id))
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
    const id = Number(params.id);
    const body = await request.json();

    const updatedProperty = await db
      .update(propertyTable)
      .set(body)
      .where(eq(propertyTable.id, id))
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
