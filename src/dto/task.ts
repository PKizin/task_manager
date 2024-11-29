import type { Priority, Task } from "../types/index";

export type TaskDBO = Omit<Task, "priority"> & {
  priority: {
    id: number;
    name: string;
  };
};

export type TaskDTO = Task;

export function buildTaskDTO(taskDBO: TaskDBO | null): TaskDTO | null {
  if (!taskDBO) return null;

  const {
    priority: { name: priorityName },
    ...rest
  } = taskDBO;
  return { priority: priorityName as Priority, ...rest };
}
