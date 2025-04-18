<script>
	import DiscordSvg from '$lib/imgs/discord.svg';
	import TwitterSvg from '$lib/imgs/x.svg';

	const footerNavs = [
		{
			label: 'Services',
			items: [
				{
					href: '#services',
					name: 'Customer Support Agents'
				},
				{
					href: '#services',
					name: 'AI Chatbots'
				},
				{
					href: '#services',
					name: 'Agentic Workflows'
				},
				{
					href: '#services',
					name: 'Voice Agents'
				}
			]
		},

		{
			label: 'Company',
			items: [
				{
					href: '#about',
					name: 'About Us'
				},
				{
					href: '#case-studies',
					name: 'Case Studies'
				},
				{
					href: '#contact',
					name: 'Contact'
				},
				{
					href: '/careers',
					name: 'Careers'
				}
			]
		},
		{
			label: 'Legal',
			items: [
				{
					href: '/terms',
					name: 'Terms'
				},
				{
					href: '/privacy',
					name: 'Privacy'
				}
			]
		}
	];

	const footerSocials = [
		{
			href: 'https://discord.com/vectraai',
			name: 'Discord',
			icon: DiscordSvg
		},
		{
			href: 'https://twitter.com/vectraai',
			name: 'Twitter',
			icon: TwitterSvg
		}
	];
</script>

<footer>
	<div class="mx-auto w-full max-w-screen-xl xl:pb-2">
		<div class="gap-4 p-4 px-8 py-16 sm:pb-16 md:flex md:justify-between">
			<div class="mb-12 flex flex-col gap-4">
				<a href="/" class="flex items-center gap-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-brain-circuit size-8"
					>
						<path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08 2.5 2.5 0 0 0 4.91.05L12 20V4.5Z"/>
						<path d="M16 8V5c0-1.1.9-2 2-2"/>
						<path d="M12 13h4"/>
						<path d="M12 18h6a2 2 0 0 1 2 2v1"/>
						<path d="M12 8h8"/>
						<path d="M20.5 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"/>
						<path d="M16.5 13a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"/>
						<path d="M20.5 21a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"/>
						<path d="M18.5 3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"/>
					</svg>
					<span class="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
						Vectra AI
					</span>
				</a>
				<p class="max-w-xs">Transforming businesses with intelligent AI solutions</p>
				<p class="text-sm text-gray-500">vectraaisolutions.contact@gmail.com</p>
				<p class="text-sm text-gray-500">+91 9220796359</p>
			</div>
			<div class="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-10">
				{#each footerNavs as nav}
					<div>
						<h2
							class="mb-6 text-sm font-medium uppercase tracking-tighter text-gray-900 dark:text-white"
						>
							{nav.label}
						</h2>
						<ul class="grid gap-2">
							{#each nav.items as item}
								<li>
									<a
										href={item.href}
										class="cursor-pointer text-sm font-[450] text-gray-400 duration-200 hover:text-gray-200"
									>
										{item.name}
									</a>
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</div>

		<div
			class="flex flex-col gap-2 rounded-md border-neutral-700/20 px-8 py-4 sm:flex sm:flex-row sm:items-center sm:justify-between"
		>
			<div class="flex items-center space-x-5 sm:mt-0 sm:justify-center">
				{#each footerSocials as social}
					<a
						href={social.href}
						class="fill-gray-500 text-gray-500 hover:fill-gray-900 hover:text-gray-900 dark:hover:fill-gray-600 dark:hover:text-gray-600"
					>
						<img src={social.icon} class="size-4" alt={social.name} />
						<span class="sr-only">{social.name}</span>
					</a>
				{/each}
			</div>
			<span class="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
				Copyright ©
				{' '}
				{new Date().getFullYear()}
				{' '}
				<a href="/" class="cursor-pointer">Vectra AI</a>
				. All Rights Reserved.
			</span>
		</div>
	</div>
</footer>
