import { integer, text, boolean, pgTable } from "drizzle-orm/pg-core";

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export const todo = pgTable("todo", {
  id: integer("id").primaryKey(),
  text: text("text").notNull(),
  done: boolean("done").default(false).notNull(),
});
