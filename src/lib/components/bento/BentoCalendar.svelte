<script lang="ts">
  import { cn } from "$lib/utils";

  let className: any = "";
  export { className as class };
</script>

<div
  class={cn(
    "absolute inset-0 h-full w-full overflow-hidden",
    className
  )}
>
  <div class="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-black/70 to-black/40">
    <div class="grid h-[20%] w-full grid-cols-6 gap-1 px-6">
      {#each Array(12) as _}
        <div class="rounded bg-white/5"></div>
      {/each}
    </div>
    <div class="mt-4 grid h-[15%] w-full grid-cols-7 gap-1 px-6">
      {#each Array(14) as _}
        <div class="rounded bg-white/5"></div>
      {/each}
    </div>
    <div class="mt-4 grid h-[15%] w-full grid-cols-5 gap-1 px-6">
      {#each Array(10) as _}
        <div class="rounded bg-white/5"></div>
      {/each}
    </div>
    <div class="absolute bottom-8 left-0 right-0 mx-auto h-8 w-1/3 rounded-full bg-primary/20 blur-xl"></div>
  </div>
</div>