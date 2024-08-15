import { integer, pgEnum, pgTable, text, varchar } from "drizzle-orm/pg-core";

export const roleEnum = pgEnum("role", ["admin", "seller", "user"]);

export const usersTable = pgTable("users", {
  id: varchar("id").primaryKey(),
  name: text("name").notNull(),
  role: roleEnum("role").default("user").notNull(),
});

export const cityEnum = pgEnum("city", [
  "erbil",
  "sulaymaniyah",
  "duhok",
  "halabja",
]);

export const propertyTable = pgTable("property", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity({ startWith: 1000 }),
  name: text("name").notNull(),
  description: text("description").notNull(),
  area: integer("area").notNull(),
  bed: integer("bed").notNull(),
  bath: integer("bath").notNull(),
  city: cityEnum("city").notNull().default("erbil"),
  userId: varchar("user_id")
    .references(() => usersTable.id)
    .notNull(),
});
