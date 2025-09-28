import { text, boolean, pgTable, integer } from "drizzle-orm/pg-core";

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export const todo = pgTable("todo", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  text: text("text").notNull(),
  done: boolean("done").default(false).notNull(),
});
