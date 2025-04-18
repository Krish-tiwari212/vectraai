<script lang="ts">
	import { AtSign, BrainCircuit, Building, Instagram, MessageSquare, Phone, Send, User } from 'lucide-svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { fly } from 'svelte/transition';
	import BorderBeam from '$lib/components/magic/borderbeam/BorderBeam.svelte';
	import Globe from '$lib/components/magic/globe/Globe.svelte';

	let isSubmitting = false;
	let isSubmitted = false;

	let formData = {
		name: '',
		email: '',
		company: '',
		message: ''
	};

	const handleSubmit = async () => {
		isSubmitting = true;
		
		// Simulate API call
		await new Promise(resolve => setTimeout(resolve, 1500));
		
		// Reset form and show success
		isSubmitting = false;
		isSubmitted = true;
		formData = {
			name: '',
			email: '',
			company: '',
			message: ''
		};
	};
</script>

<section id="contact" class="py-16 md:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
		<div class="mx-auto max-w-4xl text-center">
			<h2 class="text-2xl font-bold tracking-tight sm:text-3xl md:text-5xl">Get in touch</h2>
			<p class="mt-3 md:mt-4 text-base md:text-lg text-gray-600 dark:text-gray-300">
				Let's discuss how Vectra AI can transform your business with intelligent AI solutions
			</p>
		</div>
		
		<div class="mt-10 md:mt-16 grid gap-6 md:gap-10 md:grid-cols-2">
			<!-- Contact form with magic BorderBeam -->
			<div class="relative rounded-2xl border bg-white/5 p-1">
				<BorderBeam 
					size={100}
					duration={15}
					delay={0}
					colorFrom="var(--color-one)"
					colorTo="var(--color-two)"
				/>
				
				<div class="relative z-10 rounded-xl bg-white/5 p-4 sm:p-6 backdrop-blur-lg dark:bg-black/20">
					{#if isSubmitted}
						<div in:fly={{ y: 10, duration: 600 }} class="flex h-full flex-col items-center justify-center py-8 md:py-12 text-center">
							<div class="mb-4 flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-full bg-primary/10">
								<MessageSquare class="h-6 w-6 md:h-8 md:w-8 text-primary" />
							</div>
							<h3 class="mb-2 text-lg md:text-xl font-semibold">Message Sent!</h3>
							<p class="mb-4 md:mb-6 max-w-md text-sm md:text-base text-gray-600 dark:text-gray-300">
								Thank you for reaching out. Our team will get back to you shortly.
							</p>
							<Button 
								on:click={() => isSubmitted = false}
								variant="outline"
								class="px-4 md:px-6 text-sm"
							>
								Send another message
							</Button>
						</div>
					{:else}
						<form on:submit|preventDefault={handleSubmit} class="space-y-4 md:space-y-6">
							<div>
								<label for="name" class="mb-1 md:mb-2 block text-xs md:text-sm font-medium">Your Name</label>
								<div class="relative">
									<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 z-10">
										<User class="h-4 w-4 md:h-5 md:w-5 text-gray-400 dark:text-gray-300" />
									</div>
									<input
										bind:value={formData.name}
										type="text"
										id="name"
										required
										class="block w-full rounded-lg border border-gray-600/30 bg-white/80 p-2 md:p-2.5 pl-8 md:pl-10 text-sm md:text-base text-black focus:border-primary focus:ring-primary dark:border-gray-600/30 dark:bg-black/40 dark:text-white dark:placeholder-gray-400"
										placeholder="John Doe"
									/>
								</div>
							</div>
							
							<div>
								<label for="email" class="mb-1 md:mb-2 block text-xs md:text-sm font-medium">Your Email</label>
								<div class="relative">
									<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 z-10">
										<AtSign class="h-4 w-4 md:h-5 md:w-5 text-gray-400 dark:text-gray-300" />
									</div>
									<input
										bind:value={formData.email}
										type="email"
										id="email"
										required
										class="block w-full rounded-lg border border-gray-600/30 bg-white/80 p-2 md:p-2.5 pl-8 md:pl-10 text-sm md:text-base text-black focus:border-primary focus:ring-primary dark:border-gray-600/30 dark:bg-black/40 dark:text-white dark:placeholder-gray-400"
										placeholder="name@company.com"
									/>
								</div>
							</div>
							
							<div>
								<label for="company" class="mb-1 md:mb-2 block text-xs md:text-sm font-medium">Company</label>
								<div class="relative">
									<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 z-10">
										<Building class="h-4 w-4 md:h-5 md:w-5 text-gray-400 dark:text-gray-300" />
									</div>
									<input
										bind:value={formData.company}
										type="text"
										id="company"
										class="block w-full rounded-lg border border-gray-600/30 bg-white/80 p-2 md:p-2.5 pl-8 md:pl-10 text-sm md:text-base text-black focus:border-primary focus:ring-primary dark:border-gray-600/30 dark:bg-black/40 dark:text-white dark:placeholder-gray-400"
										placeholder="Your company"
									/>
								</div>
							</div>
							
							<div>
								<label for="message" class="mb-1 md:mb-2 block text-xs md:text-sm font-medium">Message</label>
								<textarea
									bind:value={formData.message}
									id="message"
									rows={3}
									required
									class="block w-full rounded-lg border border-gray-600/30 bg-white/80 p-2 md:p-2.5 text-sm md:text-base text-black focus:border-primary focus:ring-primary dark:border-gray-600/30 dark:bg-black/40 dark:text-white dark:placeholder-gray-400"
									placeholder="Tell us about your project or inquiry..."
								></textarea>
							</div>
							
							<Button
								type="submit"
								disabled={isSubmitting}
								class="w-full gap-2 text-sm md:text-base"
							>
								{#if isSubmitting}
									<div class="h-4 w-4 md:h-5 md:w-5 animate-spin rounded-full border-2 border-gray-300 border-t-white"></div>
									Processing...
								{:else}
									<Send class="h-4 w-4 md:h-5 md:w-5" />
									Send Message
								{/if}
							</Button>
						</form>
					{/if}
				</div>
			</div>
			
			<!-- Contact info with globe visualization -->
			<div class="flex flex-col space-y-6 md:space-y-8">
				<div class="flex flex-1 flex-col justify-between rounded-2xl border bg-white/5 p-5 md:p-8 backdrop-blur-sm dark:bg-black/5">
					<div class="mb-4 md:mb-6">
						<div class="mb-2 flex items-center gap-2 md:gap-3">
							<BrainCircuit class="h-5 w-5 md:h-6 md:w-6 text-primary" />
							<h3 class="text-lg md:text-xl font-bold">Vectra AI</h3>
						</div>
						<p class="text-sm md:text-base text-gray-600 dark:text-gray-300">
							Transforming businesses with intelligent AI solutions
						</p>
					</div>
					
					<div class="space-y-3 md:space-y-4">
						<div class="flex items-start gap-2 md:gap-3">
							<Phone class="h-4 w-4 md:h-5 md:w-5 shrink-0 text-primary" />
							<div>
								<p class="text-sm md:text-base font-medium">Phone</p>
								<a href="tel:+919220796359" class="text-xs md:text-sm text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary">
									+91 9220796359
								</a>
							</div>
						</div>
						
						<div class="flex items-start gap-2 md:gap-3">
							<AtSign class="h-4 w-4 md:h-5 md:w-5 shrink-0 text-primary" />
							<div>
								<p class="text-sm md:text-base font-medium">Email</p>
								<a href="mailto:vectraaisolutions.contact@gmail.com" class="text-xs md:text-sm text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary break-words">
									vectraaisolutions.contact@gmail.com
								</a>
							</div>
						</div>
						
						<div class="flex items-start gap-2 md:gap-3">
							<Instagram class="h-4 w-4 md:h-5 md:w-5 shrink-0 text-primary" />
							<div>
								<p class="text-sm md:text-base font-medium">Instagram</p>
								<a href="https://instagram.com/vectraaisolutions" target="_blank" rel="noopener noreferrer" class="text-xs md:text-sm text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary">
									@vectraaisolutions
								</a>
							</div>
						</div>
					</div>
				</div>
				
				<!-- Globe visualization -->
				<div class="relative h-[200px] md:h-[300px] overflow-hidden rounded-2xl border bg-black/5 p-1">
					<BorderBeam 
						size={80}
						duration={20}
						delay={5}
						colorFrom="var(--color-two)"
						colorTo="var(--color-one)"
					/>
					<div class="relative z-10 h-full rounded-xl overflow-hidden bg-black/5 backdrop-blur-sm">
						<div class="h-full w-full relative">
							<Globe class="top-0" />
							<div class="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>