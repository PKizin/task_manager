<script lang="ts">
  import { actions } from "astro:actions";
  import { onMount } from "svelte";

  import type { TaskEditable, TaskFilter } from "../types";

  import TaskRow from "./row/TaskRow.svelte";
  import TaskRowFilters from "./row/TaskRowFilters.svelte";
  import TaskTableToolbar from "./TaskTableToolbar.svelte";

  const headers: string[] = [
    "Title",
    "Description",
    "Priority",
    "Due date",
    "Completed",
  ];

  let tasks: TaskEditable[] = $state([]);

  let filterMode: boolean = $state(false);
  let filter: TaskFilter = $state({});

  onMount(async () => {
    const { data, error } = await actions.getTasks();
    if (!error) tasks = data;
  });

  async function addTaskCallback(): Promise<void> {
    await actions.addTask();
    const { data, error } = await actions.getTasks();
    if (!error) tasks = data;
  }

  async function deleteTaskCallback(id: number): Promise<void> {
    await actions.deleteTask(id);
    const { data, error } = await actions.getTasks();
    if (!error) tasks = data;
  }

  async function deleteTasksCallback(): Promise<void> {
    await actions.deleteTasks();
    const { data, error } = await actions.getTasks();
    if (!error) tasks = data;
  }

  async function editTaskCallback(id: number): Promise<void> {
    const task = tasks.find((task) => task.id === id);
    if (task) {
      await actions.updateTask(task);
      const { data, error } = await actions.getTasks();
      if (!error) tasks = data;
    }
  }

  $effect(() => {
    if (!filterMode) {
      filter = {};
    }
  });

  let filteredTasks = $derived(
    tasks.filter(
      (task) =>
        task.edit ||
        Object.keys(filter)
          .filter((prop) => filter[prop] !== undefined)
          .every((prop) => {
            if (prop === "title" || prop === "description") {
              return (
                task[prop]
                  .toLocaleLowerCase()
                  .includes(filter[prop]?.toLocaleLowerCase()) ||
                filter[prop].length === 0
              );
            } else if (prop === "dueDate") {
              return (
                task[prop].toLocaleDateString() ===
                filter[prop]?.toLocaleDateString()
              );
            } else {
              return task[prop] === filter[prop];
            }
          }),
    ),
  );
</script>

<table class="block">
  <thead>
    <tr>
      {#each headers as header}
        <th>
          <div class="flex h-6">
            {header}
          </div>
        </th>
      {/each}
    </tr>
    <TaskRowFilters bind:filterMode={filterMode} bind:filter={filter} />
  </thead>
  <tbody class="block mt-[2px] border-solid border-t-[3px] border-b-[3px] border-gray-900 h-[50vh] overflow-y-scroll">
    <TaskRowFilters />
    {#each filteredTasks as task}
      <TaskRow {task} {deleteTaskCallback} {editTaskCallback} />
    {/each}
  </tbody>
</table>
<TaskTableToolbar bind:filterMode={filterMode} {addTaskCallback} {deleteTasksCallback} />
