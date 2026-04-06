<script lang="ts">
	import ButtonLink from '$lib/components/ButtonLink.svelte';
	import SeoHead from '$lib/components/SeoHead.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import { pricingTracks } from '$lib/content/marketing';

	const description =
		'Pricing for Rasil is shaped around confirmation volume, workflow complexity, and the level of operational rollout support your team needs.';

	const included = [
		'Strategic onboarding around confirmation flow design',
		'Merchant-appropriate WhatsApp-first workflow setup',
		'Operator handoff logic and session visibility',
		'Guidance for scaling beyond the initial platform connection'
	];
</script>

<SeoHead title="Pricing" description={description} path="/pricing" />

<section class="section pt-10">
	<div class="shell space-y-10">
		<SectionHeading
			eyebrow="Pricing"
			title="Commercial terms shaped around operational complexity, not generic seats and buzzwords."
			description="Rasil is still in its early rollout phase, so pricing is handled through a short discovery conversation. That lets the onboarding match the real workflow."
		/>

		<div class="grid gap-5 xl:grid-cols-3">
			{#each pricingTracks as track (track.name)}
				<article class="panel grid gap-6 p-6 sm:p-8">
					<div class="space-y-3">
						<p class="text-sm font-semibold uppercase tracking-[0.16em] text-sage-500">{track.name}</p>
						<h2 class="text-3xl font-semibold tracking-[-0.04em] text-ink-950">{track.name}</h2>
						<p class="text-base leading-8 text-ink-700">{track.fit}</p>
					</div>
					<div class="grid gap-3">
						{#each track.includes as item (item)}
							<div class="flex items-start gap-3 rounded-[1.25rem] border border-line-200 bg-surface-100/75 px-4 py-3">
								<span class="mt-1 h-2.5 w-2.5 rounded-full bg-sage-500"></span>
								<p class="text-sm leading-7 text-ink-700">{item}</p>
							</div>
						{/each}
					</div>
				</article>
			{/each}
		</div>

		<div class="panel schematic grid gap-6 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
			<div class="space-y-4">
				<p class="text-sm font-semibold uppercase tracking-[0.16em] text-ink-700">Included by default</p>
				<h2 class="text-3xl font-semibold tracking-[-0.04em] text-ink-950">A rollout designed to make the workflow usable, not merely installed.</h2>
			</div>
			<div class="grid gap-3">
				{#each included as item (item)}
					<div class="rounded-[1.25rem] border border-line-200 bg-white/86 px-4 py-3 text-sm leading-7 text-ink-700">
						{item}
					</div>
				{/each}
			</div>
		</div>

		<div class="panel-dark flex flex-col gap-5 p-8 sm:flex-row sm:items-center sm:justify-between">
			<div class="space-y-3">
				<p class="text-sm font-semibold uppercase tracking-[0.16em] text-sage-300">Pricing conversation</p>
				<p class="max-w-2xl text-lg leading-8 text-white/78">
					Tell us about order volume, platform, and team structure. We’ll recommend the right starting setup.
				</p>
			</div>
			<ButtonLink href="/contact" label="Request access" />
		</div>
	</div>
</section>
