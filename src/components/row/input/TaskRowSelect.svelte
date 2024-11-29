<script lang="ts">
  type Props = {
    value: string;
    values: string[];
    hidden?: boolean;
  };

  let { value = $bindable(), values, hidden }: Props = $props();
</script>

<div>
  <select class={`input-select ${hidden ? 'hidden' : ''}`} bind:value={value}>
    {#each values as option}
      <option class="bg-transparent">{option}</option>
    {/each}
  </select>
</div>

<style>
  .input-select {
    @apply block w-full rounded-md border-0 bg-transparent h-6
    text-gray-900 shadow-sm ring-1 ring-inset ring-blue-500 outline-none
    focus:ring-blue-700 hover:ring-blue-700;
  }
  .input-select.hidden {
    @apply h-0
  }
</style>