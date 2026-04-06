<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import ButtonLink from '$lib/components/ButtonLink.svelte';
	import Logo from '$lib/components/Logo.svelte';
	import { mainNav } from '$lib/site';
</script>

<header class="sticky top-0 z-40 border-b border-white/70 bg-surface-50/85 backdrop-blur-xl">
	<div class="shell flex items-center justify-between gap-6 py-4">
		<a class="flex items-center" href={resolve('/')} aria-label="Rasil home">
			<Logo className="w-12 sm:w-14" />
		</a>

		<nav class="hidden items-center gap-6 lg:flex">
			{#each mainNav as item (item.href)}
				<a
					class={`text-sm font-semibold transition ${
						page.url.pathname === item.href ? 'text-ink-950' : 'text-ink-700 hover:text-ink-950'
					}`}
					href={resolve(item.href)}
				>
					{item.label}
				</a>
			{/each}
		</nav>

		<div class="flex items-center gap-3">
			<ButtonLink href="/contact" label="Book a demo" className="hidden sm:inline-flex" />
			<ButtonLink href="/contact" label="Contact" variant="secondary" className="sm:hidden" />
		</div>
	</div>
</header>
