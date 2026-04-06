<script lang="ts">
	import ButtonLink from '$lib/components/ButtonLink.svelte';
	import SeoHead from '$lib/components/SeoHead.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import { integrations } from '$lib/content/marketing';

	const description =
		'Connect your store to Rasil and run a clearer WhatsApp-first confirmation workflow across the platforms that matter.';

	const layers = [
		{
			title: 'Storefront intake',
			copy: 'Orders enter Rasil from the commerce platform so the team starts from clean order context instead of manually rebuilding cases.'
		},
		{
			title: 'Confirmation workflow',
			copy: 'The session opens automatically and routes the customer toward a structured outcome on WhatsApp.'
		},
		{
			title: 'Operational visibility',
			copy: 'Operators see confirmation state, exceptions, edits, and manual interventions in one place.'
		}
	];
</script>

<SeoHead title="Integrations" description={description} path="/integrations" />

<section class="section pt-10">
	<div class="shell space-y-10">
		<SectionHeading
			eyebrow="Integrations"
			title="Connect commerce platforms to a cleaner confirmation engine."
			description="Rasil is built to sit close to the order source, then carry that context through the full confirmation workflow."
		/>

		<div class="grid gap-5 lg:grid-cols-3">
			{#each integrations as integration (integration.name)}
				<article class="panel p-6 sm:p-7">
					<div class="flex items-center justify-between gap-4">
						<h2 class="text-2xl font-semibold tracking-[-0.03em] text-ink-950">{integration.name}</h2>
						<span class="rounded-full border border-sage-300 bg-sage-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-sage-500">
							{integration.status}
						</span>
					</div>
					<p class="mt-4 text-base leading-8 text-ink-700">{integration.copy}</p>
				</article>
			{/each}
		</div>

		<div class="panel schematic grid gap-5 p-6 sm:p-8 lg:grid-cols-3">
			{#each layers as layer (layer.title)}
				<div class="rounded-[1.5rem] border border-line-200 bg-white/88 p-5">
					<p class="text-sm font-semibold uppercase tracking-[0.16em] text-ink-700">{layer.title}</p>
					<p class="mt-3 text-base leading-8 text-ink-700">{layer.copy}</p>
				</div>
			{/each}
		</div>

		<div class="panel-dark flex flex-col gap-5 p-8 sm:flex-row sm:items-center sm:justify-between">
			<div class="space-y-3">
				<p class="text-sm font-semibold uppercase tracking-[0.16em] text-sage-300">Need a rollout plan?</p>
				<p class="max-w-2xl text-lg leading-8 text-white/78">
					Talk through the platform you use today and the confirmation workflow you want to standardize next.
				</p>
			</div>
			<ButtonLink href="/contact" label="Talk to sales" />
		</div>
	</div>
</section>
