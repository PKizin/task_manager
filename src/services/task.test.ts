import { test, expect, vi } from "vitest";

import { getTask, getTasks } from "./task";
import { taskDBO, taskDTO } from "./task.test.mock";

vi.mock("@prisma/client", async () => ({
  PrismaClient: class {
    constructor() { }
    task = {
      findUnique: vi.fn().mockImplementation(async () => taskDBO),
      findMany: vi.fn().mockImplementation(async () => [taskDBO, taskDBO]),
    };
  },
}));

test("Get task by id", async () => {
  expect(await getTask(1)).toStrictEqual(taskDTO);
});

test("Get all tasks", async () => {
  expect(await getTasks()).toStrictEqual([taskDTO, taskDTO]);
});
