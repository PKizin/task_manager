import { PrismaClient } from "@prisma/client";

import type { TaskDTO } from "../dto/task";
import { buildTaskDTO } from "../dto/task";

const prisma = new PrismaClient();

export async function getTask(id: number): Promise<TaskDTO | null> {
  const task = await prisma.task.findUnique({
    where: {
      id: id,
    },
    include: {
      priority: true,
    },
  });
  return buildTaskDTO(task);
}

export async function getTasks(): Promise<TaskDTO[]> {
  const tasks = await prisma.task.findMany({
    include: {
      priority: true,
    },
  });
  return tasks.map((task: any) => buildTaskDTO(task)) as TaskDTO[];
}

export async function addTask(): Promise<void> {
  await prisma.task.create({
    data: {
      priorityId: 2,
    },
  });
}

export async function deleteTask(id: number): Promise<void> {
  await prisma.task.delete({
    where: {
      id: id,
    },
  });
}

export async function deleteTasks(): Promise<void> {
  await prisma.task.deleteMany({});
}

export async function updateTask({
  id,
  title,
  description,
  priority: priorityName,
  dueDate,
  completed,
}: TaskDTO): Promise<void> {
  await prisma.task.update({
    where: {
      id: id,
    },
    data: {
      title: title,
      description: description,
      priority: {
        connect: {
          name: priorityName,
        },
      },
      dueDate: dueDate,
      completed: completed,
    },
    include: {
      priority: true,
    },
  });
}
