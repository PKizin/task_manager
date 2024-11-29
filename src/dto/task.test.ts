import { test, expect } from "vitest";

import { buildTaskDTO } from "./task";
import { taskDBO, taskDTO } from "./task.test.mock";

test("Build DTO from null", () => {
  expect(buildTaskDTO(null)).toBe(null);
});

test("Build DTO from valid object", () => {
  expect(buildTaskDTO(taskDBO)).toStrictEqual(taskDTO);
});
