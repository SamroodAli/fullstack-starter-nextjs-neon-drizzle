"use server";
import { eq, not } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db } from "@/db/index";
import { todo } from "@/db/schema";
import { usersSync } from "drizzle-orm/neon";

export const getData = async (userId: string) => {
  const data = await db
    .select()
    .from(todo)
    .innerJoin(usersSync, eq(todo.userId, usersSync.id))
    .where(eq(todo.userId, userId))
    .orderBy(todo.id);
  return data.map((each) => each.todo);
};

export const addTodo = async (text: string, userId: string) => {
  const [insertedTodo] = await db
    .insert(todo)
    .values({ text, userId })
    .returning();
  revalidatePath("/");
  return insertedTodo;
};

export const deleteTodo = async (id: number) => {
  await db.delete(todo).where(eq(todo.id, id));

  revalidatePath("/");
};

export const toggleTodo = async (id: number) => {
  await db
    .update(todo)
    .set({
      done: not(todo.done),
    })
    .where(eq(todo.id, id));

  revalidatePath("/");
};

export const editTodo = async (id: number, text: string) => {
  await db
    .update(todo)
    .set({
      text: text,
    })
    .where(eq(todo.id, id));

  revalidatePath("/");
};
