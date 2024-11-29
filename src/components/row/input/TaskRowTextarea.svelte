<script lang="ts">
  type Props = {
    value: string;
  };

  let { value = $bindable() }: Props = $props();
</script>

<div>
  <textarea class="input-text" placeholder="Type here..." bind:value={value} />
</div>

<style>
  .input-text {
    @apply block w-[12em] rounded-md border-0 h-24
    text-gray-900 shadow-sm ring-1 ring-inset ring-blue-500 
    placeholder:text-gray-400 outline-none
    focus:ring-blue-700 hover:ring-blue-700;
  }
</style>