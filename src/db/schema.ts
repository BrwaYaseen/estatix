import { integer, pgTable, text } from "drizzle-orm/pg-core";

export const propertyTable = pgTable("property", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity({ startWith: 1000 }),
  name: text("name").notNull(),
  description: text("description").notNull(),
  area: integer("area").notNull(),
  bed: integer("bed").notNull(),
  bath: integer("bath").notNull(),
});
