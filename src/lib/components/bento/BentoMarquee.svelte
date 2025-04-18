<script lang="ts">
  import { onMount } from "svelte";
  import { cn } from "$lib/utils";

  let className: any = "";
  export { className as class };

  let phrases = [
    "AI-powered customer support",
    "Natural language processing",
    "Intelligent chatbots",
    "Custom AI workflows",
    "Voice recognition agents",
    "ML-driven analytics",
    "Process automation",
    "Business intelligence",
    "Data insights",
    "Neural networks",
    "Predictive models",
    "Machine learning"
  ];
</script>

<div class={cn("absolute inset-0 h-full w-full", className)}>
  <div class="marquee relative h-full w-full overflow-hidden">
    <div class="track absolute h-full w-fit whitespace-nowrap">
      {#each Array(20) as _}
        {#each phrases as phrase}
          <div
            class="flex h-[40px] w-fit items-center px-4 opacity-50 text-neutral-400"
          >
            {phrase}
          </div>
        {/each}
      {/each}
    </div>
  </div>
</div>

<style>
  .track {
    animation: marquee 60s linear infinite;
    will-change: transform;
  }

  @keyframes marquee {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }
</style>