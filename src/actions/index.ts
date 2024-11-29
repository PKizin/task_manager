import { defineAction } from "astro:actions";
import { z } from "astro:schema";

import {
  addTask,
  deleteTask,
  deleteTasks,
  getTask,
  getTasks,
  updateTask,
} from "../services/task";

export const server = {
  getTask: defineAction({
    input: z.number(),
    handler: async (id: number) => {
      return await getTask(id);
    },
  }),

  getTasks: defineAction({
    handler: async () => {
      return await getTasks();
    },
  }),

  addTask: defineAction({
    handler: async () => {
      return await addTask();
    },
  }),

  deleteTask: defineAction({
    input: z.number(),
    handler: async (id: number) => {
      return await deleteTask(id);
    },
  }),

  deleteTasks: defineAction({
    handler: async () => {
      return await deleteTasks();
    },
  }),

  updateTask: defineAction({
    input: z.object({
      id: z.number(),
      title: z.string(),
      description: z.string(),
      priority: z.string(),
      dueDate: z.string(),
      completed: z.boolean(),
      edit: z.boolean(),
    }),
    handler: async (task: any) => {
      return await updateTask(task);
    },
  }),
};
