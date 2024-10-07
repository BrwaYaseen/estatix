import { db } from "@/db/db";
import { eq } from "drizzle-orm";
import { profileTable } from "@/db/schema";
import { auth } from "@clerk/nextjs/server";

export async function getUserFromRequest(request: Request): Promise<any> {
  try {
    // Get the user ID from Clerk AND FIX PROFILE TYPE PLEASEEEEE
    const { userId } = auth();

    if (!userId) {
      return null;
    }

    // Fetch the user profile from the database
    const profile = await db.query.profileTable.findFirst({
      where: eq(profileTable.userId, userId),
    });

    if (!profile) {
      console.error(`Profile not found for user ID: ${userId}`);
      return null;
    }

    return profile;
  } catch (error) {
    console.error("Error in getUserFromRequest:", error);
    return null;
  }
}
