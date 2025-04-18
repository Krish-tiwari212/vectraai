<script lang="ts">
  import { cn } from "$lib/utils";

  let className: any = "";
  export { className as class };
</script>

<div
  class={cn(
    "pointer-events-none absolute inset-0 h-full w-full from-indigo-500 to-purple-500 [mask-image:radial-gradient(circle_at_center,transparent_55%,black)]",
    className
  )}
>
  <div class="absolute inset-0 bg-gradient-to-br from-primary to-violet-400 opacity-40" />
  <div class="absolute inset-0 flex items-center justify-center">
    <div
      class="h-[40%] w-[40%] rounded-full bg-primary opacity-50 blur-3xl"
    />
  </div>
</div>