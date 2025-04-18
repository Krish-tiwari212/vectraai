<script lang="ts">
  import { cn } from "$lib/utils";

  let className: any = "";
  export { className as class };
</script>

<div
  class={cn(
    "absolute inset-0 h-full w-full overflow-hidden bg-black",
    className
  )}
>
  <div class="absolute inset-0 flex items-center justify-center">
    <div class="relative h-[60%] w-[80%] rounded-xl border border-white/10 bg-neutral-950 p-6">
      <div class="absolute left-3 top-3 flex gap-1.5">
        <div class="h-3 w-3 rounded-full bg-red-500"></div>
        <div class="h-3 w-3 rounded-full bg-yellow-500"></div>
        <div class="h-3 w-3 rounded-full bg-green-500"></div>
      </div>
      <div class="mt-5 flex flex-col gap-2">
        <div class="h-3 w-full rounded-full bg-white/10"></div>
        <div class="h-3 w-2/3 rounded-full bg-white/10"></div>
        <div class="h-3 w-1/2 rounded-full bg-white/10"></div>
        <div class="h-3 w-1/3 rounded-full bg-white/5"></div>
        <div class="h-3 w-1/4 rounded-full bg-white/5"></div>
      </div>
    </div>
  </div>
</div>