<script lang="ts">
	import { onMount } from 'svelte';
	import createGlobe from 'cobe';
	import { spring } from 'svelte/motion';
	import { cn } from '$lib/utils';

	let x = spring(0, {
		stiffness: 0.04,
		damping: 0.4,
		precision: 0.005
	});

	let className = '';
	export { className as class };
	let pointerInteracting: any = null;
	let pointerInteractionMovement = 0;
	let canvas: HTMLCanvasElement;

	let phi = 0;
	let width = 0;
	let onResize = () => {
		width = canvas.offsetWidth;
	};

	let onRender = (state: any) => {
		if (!pointerInteracting) {
			phi += 0.005;
		}
		state.phi = phi + $x;
		state.width = width * 2;
		state.height = width * 2;
	};

	onMount(() => {
		// Adds the resize event listener when the component is mounted
		window.addEventListener('resize', onResize);
		onResize();

		// Initializes the globe with specific options
		const globe = createGlobe(canvas, {
			devicePixelRatio: 2,
			width: width,
			height: width,
			phi: 0,
			theta: 0.3,
			dark: 1,
			diffuse: 0.4,
			mapSamples: 16000,
			mapBrightness: 1.2,
			baseColor: [0.3, 0.3, 0.3],
			markerColor: [251 / 255, 100 / 255, 21 / 255],
			glowColor: [1, 1, 1],
			markers: [
				// India (Vectra AI office)
				{ location: [28.6139, 77.2090], size: 0.1 }, // New Delhi
				// Major tech hubs
				{ location: [37.7749, -122.4194], size: 0.07 }, // San Francisco
				{ location: [40.7128, -74.0060], size: 0.07 }, // New York
				{ location: [51.5074, -0.1278], size: 0.07 }, // London
				{ location: [35.6762, 139.6503], size: 0.07 }, // Tokyo
				{ location: [1.3521, 103.8198], size: 0.07 }, // Singapore
				{ location: [-33.8688, 151.2093], size: 0.07 }, // Sydney
				{ location: [52.5200, 13.4050], size: 0.07 }, // Berlin
				{ location: [48.8566, 2.3522], size: 0.07 }, // Paris
				{ location: [55.7558, 37.6173], size: 0.07 }, // Moscow
			],
			onRender: onRender
		});

		// Removes the resize event listener when the component is unmounted to prevent memory leaks
		return () => {
			window.removeEventListener('resize', onResize);
		};
	});
</script>

<main
  class={cn(
    "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
    className
  )}
>
  <canvas
    class="h-full w-full [contain:layout_paint_size]"
    bind:this={canvas}
    on:pointerdown={(e) => {
      pointerInteracting = e.clientX - pointerInteractionMovement;
      canvas.style.cursor = "grabbing";
    }}
    on:pointerup={() => {
      pointerInteracting = null;
      canvas.style.cursor = "grab";
    }}
    on:pointerout={() => {
      pointerInteracting = null;
      canvas.style.cursor = "grab";
    }}
    on:mousemove={(e) => {
      if (pointerInteracting !== null) {
        const delta = e.clientX - pointerInteracting;
        pointerInteractionMovement = delta;
        x.set(delta / 200);
      }
    }}
  />
</main>