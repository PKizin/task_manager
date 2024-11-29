<script lang="ts">
  type Props = {
    value: string;
    hidden?: boolean;
  };

  let { value = $bindable(), hidden }: Props = $props();
</script>

<div>
  <input type="text" class={`input-text ${hidden ? 'hidden' : ''}`} placeholder="Type here..." bind:value={value}>
</div>

<style>
  .input-text {
    @apply block w-[12em] rounded-md border-0 
    text-gray-900 shadow-sm ring-1 ring-inset ring-blue-500 
    placeholder:text-gray-400 outline-none
    focus:ring-blue-700 hover:ring-blue-700;
  }
  .input-text.hidden {
    @apply h-0
  }
</style>