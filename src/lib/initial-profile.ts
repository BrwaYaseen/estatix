import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { db } from "@/db/db";
import { eq } from "drizzle-orm";
import { profileTable } from "@/db/schema";
import { v4 as uuidv4 } from "uuid";

export const initialProfile = async () => {
  const user = await currentUser();

  if (!user) {
    return redirect("/sign-in");
  }

  const profile = await db.query.profileTable.findFirst({
    where: eq(profileTable.userId, user.id),
  });

  if (profile) {
    return profile;
  }

  const newProfile = await db
    .insert(profileTable)
    .values({
      id: uuidv4(),
      userId: user.id,
      name:
        user.firstName && user.lastName
          ? `${user.firstName} ${user.lastName}`
          : user.username || user.fullName || "Unknown User",
      imageUrl: user.imageUrl,
      email: user.emailAddresses[0].emailAddress,
      role: "user", // Default role
    })
    .returning();

  return newProfile[0];
};
