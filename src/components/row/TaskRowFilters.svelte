<script lang="ts">
  import type { TaskFilter } from "../../types";

  import { priorities } from "../../constants";

  import TaskRowSelect from "./input/TaskRowSelect.svelte";
  import TaskRowText from "./input/TaskRowText.svelte";
  import TaskRowDate from "./input/TaskRowDate.svelte";
  import TaskRowCheckbox from "./input/TaskRowCheckbox.svelte";

  type Props = {
    filterMode: boolean;
    filter: TaskFilter;
  };

  const { filterMode = $bindable(), filter = $bindable({}) }: Props = $props();

  function filterCompletedCallback(completed: boolean | undefined): void {
    filter.completed = completed;
  }
</script>

<tr class="group">
  <td>
    <div class="flex">
      <TaskRowText bind:value={filter.title} hidden={!filterMode} />
    </div>
  </td>
  <td>
    <div class="flex">
      <TaskRowText bind:value={filter.description} hidden={!filterMode} />
    </div>
  </td>
  <td>
    <div class="flex">
      <TaskRowSelect bind:value={filter.priority} hidden={!filterMode} values={[undefined, ...priorities]} />
    </div>
  </td>
  <td>
    <div class="flex">
      <TaskRowDate bind:value={filter.dueDate} hidden={!filterMode} />
    </div>
  </td>
  <td>
    <div class="flex flex-col w-20">
      <div class="flex h-0 invisible">Completed</div>
      <div class="flex justify-end">
        <TaskRowCheckbox bind:value={filter.completed} hidden={!filterMode} indeterminate={true} />
      </div>
    </div>
  </td>
  <td>
    <div class="flex h-0 w-12"></div>
  </td>
</tr>

