<script lang="ts">
	import { BrainCircuit, MessageSquare, Mic, Workflow } from 'lucide-svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { cn } from '$lib/utils';
	import { fly } from 'svelte/transition';

	type Service = {
		id: string;
		name: string;
		description: string;
		features: string[];
		icon: any;
		iconBackground: string;
	};

	let services: Service[] = [
		{
			id: 'service_1',
			name: 'Customer Support Agent',
			description: 'AI-powered customer support agents that handle inquiries 24/7 with human-like understanding',
			features: [
				'24/7 customer support',
				'Multilingual capabilities',
				'Seamless escalation to human agents',
				'Integration with CRM systems',
				'Continuous learning from interactions'
			],
			icon: MessageSquare,
			iconBackground: 'from-orange-600 via-rose-600 to-violet-600'
		},
		{
			id: 'service_2',
			name: 'AI Chatbot',
			description: 'Intelligent conversational AI chatbots for websites, apps, and messaging platforms',
			features: [
				'Natural language understanding',
				'Personalized conversations',
				'Multiple platform integration',
				'Performance analytics',
				'Knowledge base integration'
			],
			icon: BrainCircuit,
			iconBackground: 'from-cyan-500 via-blue-500 to-indigo-500'
		},
		{
			id: 'service_3',
			name: 'Custom Agentic Workflow',
			description: 'Bespoke AI agents designed to automate and optimize specific business workflows',
			features: [
				'Process automation',
				'Intelligent decision-making',
				'API integrations',
				'Customizable rules and logic',
				'Scalable architecture'
			],
			icon: Workflow,
			iconBackground: 'from-green-500 via-teal-500 to-emerald-600'
		},
		{
			id: 'service_4',
			name: 'Voice Agent',
			description: 'Advanced voice-enabled AI agents for phone systems and voice applications',
			features: [
				'Natural voice interactions',
				'Speech recognition',
				'Voice biometrics',
				'Call routing and processing',
				'Voice sentiment analysis'
			],
			icon: Mic,
			iconBackground: 'from-yellow-400 via-orange-500 to-yellow-600'
		}
	];
</script>

<section id="services" class="py-20">
	<div class="mx-auto flex max-w-screen-xl flex-col gap-8 px-4 py-14 md:px-8">
		<div class="mx-auto max-w-5xl text-center">
			<h4 class="text-xl font-bold tracking-tight text-black dark:text-white">Our Services</h4>

			<h2 class="text-4xl mt-2 font-bold tracking-tight text-black dark:text-white sm:text-6xl">
				AI solutions for every need
			</h2>

			<p class="mt-6 text-xl leading-8 text-black/80 dark:text-white">
				Vectra AI offers a comprehensive suite of AI services designed to transform how businesses operate and engage with customers.
			</p>
		</div>

		<div class="mx-auto grid w-full flex-col justify-center gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each services as service, id}
				<div
					in:fly={{ y: 20, duration: 300, delay: id * 100 }}
					class="relative flex max-w-[400px] flex-col gap-8 overflow-hidden rounded-2xl border p-6 text-black transition-all hover:shadow-lg dark:text-white"
				>
					<div class="flex items-center gap-4">
						<div class="relative size-12 shrink-0 overflow-hidden rounded-xl">
							<svelte:component this={service.icon} class="size-6 absolute inset-0 m-auto text-white z-10" />
							<div class={cn(`pointer-events-none absolute inset-0 bg-gradient-to-r opacity-70 ${service.iconBackground}`)}></div>
						</div>
						<div>
							<h3 class="text-xl font-semibold leading-7">
								{service.name}
							</h3>
						</div>
					</div>
					
					<p class="text-sm leading-6 text-black/70 dark:text-white/70">
						{service.description}
					</p>

					<hr
						class="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-500/30 to-neutral-200/0"
					/>
					
					{#if service.features && service.features.length > 0}
						<ul class="flex flex-col gap-2 font-normal">
							{#each service.features as feature}
								<li class="flex items-start gap-2 text-xs font-medium text-black dark:text-white">
									<span class="mt-0.5 size-2 shrink-0 rounded-full bg-primary"></span>
									<span>{feature}</span>
								</li>
							{/each}
						</ul>
					{/if}
					
					<Button href="#contact" variant="outline" class="mt-auto w-full">Learn More</Button>
				</div>
			{/each}
		</div>
	</div>
</section>
