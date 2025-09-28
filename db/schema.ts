import { usersSync } from "drizzle-orm/neon";
import { text, boolean, pgTable, integer } from "drizzle-orm/pg-core";

export interface Todo {
  id: number;
  text: string;
  done: boolean;
  userId: string;
}

export const todo = pgTable("todo", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  text: text("text").notNull(),
  done: boolean("done").default(false).notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => usersSync.id),
});
