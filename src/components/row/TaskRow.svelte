<script lang="ts">
  import type { TaskEditable } from "../../types";

  import { priorities } from "../../constants";

  import TaskRowToolbar from "./TaskRowToolbar.svelte";
  import TaskRowSelect from "./input/TaskRowSelect.svelte";
  import TaskRowTextarea from "./input/TaskRowTextarea.svelte";
  import TaskRowCheckbox from "./input/TaskRowCheckbox.svelte";
  import TaskRowDate from "./input/TaskRowDate.svelte";

  type Props = {
    task: TaskEditable;
    deleteTaskCallback: (id: number) => void;
    editTaskCallback: (id: number) => void;
  };

  let {
    task = $bindable(),
    deleteTaskCallback,
    editTaskCallback,
  }: Props = $props();
</script>

<tr class="group">
  <td class="max-w-0 align-top">
    <div class={`flex [word-break:break-word] min-h-${task.edit ? '24' : '6'}`}>
      {#if task.edit}
      <TaskRowTextarea bind:value={task.title} />
      {:else}
        {task.title}
      {/if}
    </div>
  </td>
  <td class="max-w-0 align-top">
    <div class={`flex [word-break:break-word] min-h-${task.edit ? '24' : '6'}`}>
      {#if task.edit}
        <TaskRowTextarea bind:value={task.description} />
      {:else}
        {task.description}
      {/if}
    </div>
  </td>
  <td class="max-w-0 align-top">
    <div class={`flex min-h-${task.edit ? '24' : '6'}`}>
      {#if task.edit}
        <TaskRowSelect bind:value={task.priority} values={priorities} />
      {:else}
        {task.priority}
      {/if}
    </div>
  </td>
  <td class="max-w-0 align-top">
    <div class={`flex h-${task.edit ? '24' : '6'}`}>
      {#if task.edit}
        <TaskRowDate bind:value={task.dueDate} />
      {:else}
        {task.dueDate.toLocaleDateString()}
      {/if}
    </div>
  </td>
  <td class="max-w-0 align-top">
    <div class={`flex h-${task.edit ? '24' : '6'} justify-end`}>
      {#if task.edit}
        <TaskRowCheckbox bind:value={task.completed} />
      {:else}
        {#if task.completed}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-green-400">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        {:else}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-yellow-400">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        {/if}
      {/if}
    </div>
  </td>
  <td class="max-w-0 align-top">
    <div class={`flex h-${task.edit ? '24' : '6'} ${task.edit ? 'visible' : 'collapse'} group-hover:visible`}>
      <div class="flex h-6">
        <TaskRowToolbar id={task.id} bind:edit={task.edit} {deleteTaskCallback} {editTaskCallback} />
      </div>
    </div>
  </td>
</tr>
