<script lang="ts">
  type Props = {
    filterMode: boolean;
    addTaskCallback: () => void;
    deleteTasksCallback: () => void;
  };

  let {
    filterMode = $bindable(),
    addTaskCallback,
    deleteTasksCallback,
  }: Props = $props();

  function addTask() {
    addTaskCallback();
  }

  function filterTasks(): void {
    filterMode = !filterMode;
  }

  function deleteTasks(): void {
    deleteTasksCallback();
  }
</script>

<div class="flex gap-2 py-2">
  <div>
    <button class="btn btn-blue" onclick={addTask}>Add new task</button>
  </div>
  <div>
    <button class={`btn btn-blue ${filterMode ? 'pushed' : ''}`} onclick={filterTasks}>Filter tasks</button>
  </div>
  <div>
    <button class="btn btn-blue" onclick={deleteTasks}>Clear tasks</button>
  </div>
</div>

<style>
  .btn {
    @apply font-bold py-2 px-3 rounded;
  }
  .btn-blue {
    @apply bg-blue-500 text-white;
  }
  .btn-blue:hover {
    @apply bg-blue-700;
  }
  .btn-blue:active {
    @apply bg-blue-800;
  }
  .btn-blue.pushed {
    @apply bg-blue-800;
  }
</style>