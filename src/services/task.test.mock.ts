import type { TaskDBO, TaskDTO } from "../dto/task";

export const taskDBO: TaskDBO = {
  id: 1,
  title: "title",
  description: "description",
  priority: {
    id: 2,
    name: "medium",
  },
  dueDate: new Date(1),
  completed: false,
};

export const taskDTO: TaskDTO = {
  id: 1,
  title: "title",
  description: "description",
  priority: "medium",
  dueDate: new Date(1),
  completed: false,
};
