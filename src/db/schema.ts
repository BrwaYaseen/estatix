import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";

import { sql } from "drizzle-orm";

export const userRoles = ["admin", "member", "user"] as const;

export const profileTable = sqliteTable("profile", {
  id: text("id").primaryKey(),
  userId: text("user_id").notNull(),
  imageUrl: text("image_url"),
  name: text("name").notNull(),
  email: text("email").notNull(),
  role: text("role", { enum: userRoles }).notNull().default("user"),
  createdAt: integer("created_at", { mode: "timestamp" }).default(
    sql`CURRENT_TIMESTAMP`
  ),
});

export const cities = ["erbil", "sulaymaniyah", "duhok", "halabja"] as const;
export const categories = ["buy", "rent", "apartment"] as const;

export const propertyTable = sqliteTable("property", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  description: text("description").notNull(),
  area: integer("area").notNull(),
  bed: integer("bed").notNull(),
  bath: integer("bath").notNull(),
  price: integer("price").notNull(),
  phoneNumber: text("phone_number").notNull(),
  latitude: real("latitude").notNull(),
  longitude: real("longitude").notNull(),
  category: text("category", { enum: categories }).notNull().default("buy"),
  city: text("city", { enum: cities }).notNull().default("erbil"),
  userId: text("user_id")
    .references(() => profileTable.id)
    .notNull(),
});
