<script>
	import { seo } from '$lib';
	import ClientSection from '$lib/components/landing/ClientSection.svelte';
	import ContactSection from '$lib/components/landing/ContactSection.svelte';
	import CtaSection from '$lib/components/landing/CtaSection.svelte';
	import HeroSection from '$lib/components/landing/HeroSection.svelte';
	import ServicesSection from '$lib/components/landing/ServicesSection.svelte';
	import SphereMask from '$lib/components/magic/SphereMask/SphereMask.svelte';
</script>

<svelte:head>
	<title>{seo.title}</title>
	<meta name="description" content={seo.description} />
	<meta name="keywords" content={seo.keywords} />

	<meta property="og:title" content={seo.title} />
	<meta property="og:description" content={seo.description} />
	<meta property="og:image" content={seo.image} />
	<meta property="og:site_name" content={seo.title} />
	<meta property="og:url" content={seo.url} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={seo.title} />
	<meta name="twitter:description" content={seo.description} />
	<meta name="twitter:image" content={seo.image} />
	<meta name="twitter:site" content={seo.twitter} />
</svelte:head>
<HeroSection />
<SphereMask />
<ClientSection />
<ServicesSection />
<SphereMask reverse={true} />
<CtaSection />
<ContactSection />
