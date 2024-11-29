<script lang="ts">
  type Props = {
    value: boolean | undefined;
    hidden?: boolean;
    indeterminate?: boolean;
  };

  let { value = $bindable(), hidden, indeterminate }: Props = $props();

  let indeterminateState: boolean = $state(false);

  $effect(() => {
    if (indeterminate && hidden) {
      let checkbox = document.getElementById("task-row-checkbox");
      checkbox["indeterminate"] = false;
      indeterminateState = false;
    }
  });

  function onchange(e: any): void {
    if (indeterminate) {
      if (!e.target.checked && !indeterminateState) {
        e.target.checked = false;
        e.target.indeterminate = true;
        indeterminateState = true;
      } else if (e.target.checked && indeterminateState) {
        e.target.checked = false;
        e.target.indeterminate = false;
        indeterminateState = false;
      }
      value = indeterminateState ? false : e.target.checked ? true : undefined;
    }
  }
</script>

<div class={`flex h-6 px-[5px] ${hidden ? 'hidden' : ''} input-checkbox`}>
  <input id="task-row-checkbox" type="checkbox" bind:checked={value} {onchange} />
</div>

<style>
  .input-checkbox.hidden {
    @apply h-0
  }
</style>