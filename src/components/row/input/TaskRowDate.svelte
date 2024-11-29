<script lang="ts">
  type Props = {
    value: Date;
    hidden?: boolean;
  };

  let { value = $bindable(), hidden }: Props = $props();

  function onchange(e: any): void {
    value = isNaN(Date.parse(e.target.value))
      ? undefined
      : new Date(e.target.value);
  }
</script>

<div>
  <input type="date" class={`input-date ${hidden ? 'hidden' : ''} h-6`} value={value?.toJSON()?.slice(0, 10)} {onchange}>
</div>

<style>
  .input-date {
    @apply block w-[8em] rounded-md border-0 
    text-gray-900 shadow-sm ring-1 ring-inset ring-blue-500 
    placeholder:text-gray-400 outline-none
    focus:ring-blue-700 hover:ring-blue-700;
  }
  .input-date.hidden {
    @apply h-0
  }
</style>