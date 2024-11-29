import { priorities } from "../constants/index";

export type Priority = (typeof priorities)[number];

export type Task = {
  id: number;
  title: string;
  description: string;
  priority: Priority;
  dueDate: Date;
  completed: boolean;
};

export type TaskEditable = Task & {
  edit: boolean;
};

export type TaskFilter = Partial<Task>;
