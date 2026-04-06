<script lang="ts">
	import ButtonLink from '$lib/components/ButtonLink.svelte';
	import PreviewDashboard from '$lib/components/PreviewDashboard.svelte';
	import SeoHead from '$lib/components/SeoHead.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import { answerSources, benefits, productPillars, workflowSteps } from '$lib/content/marketing';

	const description =
		'See how Rasil combines WhatsApp order confirmation with an AI agent that answers customer questions using business and product context.';

	const modules = [
		{
			title: 'Order confirmation engine',
			copy: 'Trigger confirmation flows after checkout and move real orders forward with less manual follow-up.'
		},
		{
			title: 'AI agent for customer questions',
			copy: 'Answer frequent buyer questions around products, delivery, payment, and orders without slowing the team down.'
		},
		{
			title: 'Grounded business context',
			copy: 'Use business profile, product catalog, and order data together so the reply fits the real business.'
		}
	];
</script>

<SeoHead title="Product" description={description} path="/product" />

<section class="section pt-10">
	<div class="shell space-y-10">
		<SectionHeading
			eyebrow="Product"
			title="One product for order confirmation and AI-powered customer replies."
			description="Rasil is built for e-commerce teams that want to reduce bad orders, answer buyers faster, and operate from real business context."
		/>

		<PreviewDashboard />

		<div class="grid gap-5 lg:grid-cols-3">
			{#each productPillars as pillar (pillar.title)}
				<article class="panel p-6 sm:p-7">
					<h2 class="text-2xl font-semibold tracking-[-0.03em] text-ink-950">{pillar.title}</h2>
					<p class="mt-4 text-base leading-8 text-ink-700">{pillar.copy}</p>
				</article>
			{/each}
		</div>

		<div class="grid gap-5 lg:grid-cols-3">
			{#each workflowSteps as step (step.step)}
				<article class="panel p-6 sm:p-7">
					<p class="text-sm font-semibold uppercase tracking-[0.16em] text-sage-500">{step.step}</p>
					<h2 class="mt-4 text-2xl font-semibold tracking-[-0.03em] text-ink-950">{step.title}</h2>
					<p class="mt-4 text-base leading-8 text-ink-700">{step.copy}</p>
				</article>
			{/each}
		</div>

		<div class="panel-dark grid gap-5 p-8 lg:grid-cols-3">
			{#each modules as module (module.title)}
				<div class="rounded-[1.5rem] border border-white/10 bg-white/6 p-5">
					<h2 class="text-xl font-semibold text-white">{module.title}</h2>
					<p class="mt-4 text-base leading-8 text-white/74">{module.copy}</p>
				</div>
			{/each}
		</div>

		<div class="grid gap-5 lg:grid-cols-3">
			{#each answerSources as source (source.title)}
				<article class="panel p-6 sm:p-7">
					<h2 class="text-xl font-semibold text-ink-950">{source.title}</h2>
					<p class="mt-4 text-base leading-8 text-ink-700">{source.copy}</p>
				</article>
			{/each}
		</div>

		<div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
			{#each benefits as benefit (benefit.title)}
				<article class="panel p-6 sm:p-7">
					<h2 class="text-xl font-semibold text-ink-950">{benefit.title}</h2>
					<p class="mt-4 text-base leading-8 text-ink-700">{benefit.copy}</p>
				</article>
			{/each}
		</div>

		<div class="panel flex flex-col gap-5 p-8 sm:flex-row sm:items-center sm:justify-between">
			<div class="space-y-3">
				<p class="text-sm font-semibold uppercase tracking-[0.16em] text-ink-700">Need a closer walkthrough?</p>
				<p class="max-w-2xl text-lg leading-8 text-ink-700">
					We can show how Rasil confirms orders, answers customer questions, and connects your catalog with the buyer conversation.
				</p>
			</div>
			<ButtonLink href="/contact" label="Book a demo" />
		</div>
	</div>
</section>
