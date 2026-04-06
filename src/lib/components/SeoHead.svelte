<script lang="ts">
	import { buildMeta, site } from '$lib/site';

	type Props = {
		title: string;
		description: string;
		path: string;
	};

	let { title, description, path }: Props = $props();
	const meta = $derived(buildMeta(title, description, path));
</script>

<svelte:head>
	<title>{meta.title}</title>
	<meta name="description" content={meta.description} />
	<link rel="canonical" href={meta.canonical} />
	<meta name="theme-color" content="#263c4d" />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={site.name} />
	<meta property="og:title" content={meta.title} />
	<meta property="og:description" content={meta.description} />
	<meta property="og:url" content={meta.canonical} />
	<meta property="og:image" content={meta.image} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={meta.title} />
	<meta name="twitter:description" content={meta.description} />
	<meta name="twitter:image" content={meta.image} />
</svelte:head>
