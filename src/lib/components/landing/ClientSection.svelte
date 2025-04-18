<script>
	import GoogleSvg from '$lib/imgs/Google.svg';
	import GitHubSvg from '$lib/imgs/GitHub.svg';
	import UberSvg from '$lib/imgs/Uber.svg';
	import MicrosoftSvg from '$lib/imgs/Microsoft.svg';
	import NotionSvg from '$lib/imgs/Notion.svg';
	import Button from '$lib/components/ui/button/button.svelte';
	import { BrainCircuit, MessageSquare, Mic, Workflow, LineChart, Search, Bot, Languages } from 'lucide-svelte';
	
	// Bento grid components
	import BentoGrid from '$lib/components/bento/BentoGrid.svelte';
	import BentoCard from '$lib/components/bento/BentoCard.svelte';
	import BentoMarquee from '$lib/components/bento/BentoMarquee.svelte';
	import BentoGlow from '$lib/components/bento/BentoGlow.svelte';
	import BentoCommand from '$lib/components/bento/BentoCommand.svelte';
	import BentoCalendar from '$lib/components/bento/BentoCalendar.svelte';
	
	// Services for Bento grid
	const services = [
		{
			Icon: MessageSquare,
			name: "Customer Support Agent",
			description: "AI-powered customer support agents that handle inquiries 24/7 with human-like understanding",
			href: "#contact",
			cta: "Learn More",
			background: BentoCalendar,
			class: "col-span-3 lg:col-span-1",
		},
		{
			Icon: BrainCircuit,
			name: "AI Chatbot",
			description: "Intelligent conversational AI chatbots for websites, apps, and messaging platforms",
			href: "#contact",
			cta: "Learn More",
			background: BentoCommand,
			class: "col-span-3 lg:col-span-2",
		},
		{
			Icon: Workflow,
			name: "Custom Agentic Workflow",
			description: "Bespoke AI agents designed to automate and optimize specific business workflows",
			href: "#contact",
			cta: "Learn More",
			background: BentoCommand,
			class: "col-span-3 lg:col-span-2",
		},
		{
			Icon: Mic,
			name: "Voice Agent",
			description: "Advanced voice-enabled AI agents for phone systems and voice applications",
			href: "#contact",
			cta: "Learn More",
			background: BentoCalendar,
			class: "col-span-3 lg:col-span-1",
		},
	];
</script>

<!-- About and Case Studies Section -->
<section id="about" class="mx-auto max-w-7xl px-6 py-20 md:px-8 ">
	<div class="mx-auto max-w-screen-xl">
		<div>
			<h2 class="text-center text-3xl font-bold tracking-tight text-black dark:text-white">
				About Vectra AI
			</h2>
			<p class="mx-auto mt-6 max-w-2xl text-center text-white">
				Vectra AI is a cutting-edge artificial intelligence agency that specializes in developing intelligent solutions for businesses. 
				We help organizations transform their operations and customer experiences through advanced AI technology.
			</p>
		</div>
		
		 <!-- Bento Grid Services Section -->
		<div class="mt-16">
			
			<BentoGrid class="max-w-6xl mx-auto">
				{#each services as service}
					<BentoCard {...service} />
				{/each}
			</BentoGrid>
		</div>
		
		
	</div>
</section>
