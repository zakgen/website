<script lang="ts">
	import { resolve } from '$app/paths';
	import Logo from '$lib/components/Logo.svelte';
	import { footerNav, site } from '$lib/site';
</script>

<footer class="border-t border-line-200/80 bg-white/75">
	<div class="shell grid gap-12 py-12 lg:grid-cols-[1.3fr_0.9fr]">
		<div class="space-y-5">
			<Logo variant="wordmark" className="w-44" />
			<p class="max-w-xl text-sm leading-7 text-ink-700">
				Rasil gives merchants a clearer operating layer for post-order confirmation, helping teams reduce chaos and act with more confidence.
			</p>
		</div>

		<div class="grid gap-8 sm:grid-cols-2">
			{#each footerNav as group (group.title)}
				<div class="space-y-4">
					<p class="text-sm font-semibold uppercase tracking-[0.2em] text-ink-700">{group.title}</p>
					<div class="grid gap-3">
						{#each group.links as link (link.href)}
							<a class="text-sm text-ink-900 transition hover:text-sage-500" href={resolve(link.href)}>{link.label}</a>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>

	<div class="shell flex flex-col gap-3 border-t border-line-200/80 py-6 text-sm text-ink-700 sm:flex-row sm:items-center sm:justify-between">
		<p>&copy; {new Date().getFullYear()} {site.name}. {site.tagline}.</p>
		<a class="font-semibold text-ink-900 transition hover:text-sage-500" href={`mailto:${site.email}`}>{site.email}</a>
	</div>
</footer>
