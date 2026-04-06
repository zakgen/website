<script lang="ts">
	import ButtonLink from '$lib/components/ButtonLink.svelte';
	import PreviewDashboard from '$lib/components/PreviewDashboard.svelte';
	import SeoHead from '$lib/components/SeoHead.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import { benefits, workflowSteps } from '$lib/content/marketing';

	const description =
		'See how Rasil turns post-order messaging into a structured order confirmation workflow with better operational visibility.';

	const modules = [
		{
			title: 'Confirmation sessions',
			copy: 'Every order is represented as an explicit session with history, status, and a clear next action.'
		},
		{
			title: 'Response-state handling',
			copy: 'Customer replies map to meaningful operational outcomes instead of loose chat interpretations.'
		},
		{
			title: 'Human intervention',
			copy: 'When the conversation needs nuance, operators can step in with full context instead of starting blind.'
		}
	];
</script>

<SeoHead title="Product" description={description} path="/product" />

<section class="section pt-10">
	<div class="shell space-y-10">
		<SectionHeading
			eyebrow="Product"
			title="A product model built around control, clarity, and faster post-order decisions."
			description="Rasil is deliberately structured as an operational workflow, not a novelty messaging layer. That makes it easier for real teams to trust."
		/>

		<PreviewDashboard />

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
					We can map your current confirmation flow and show where Rasil creates cleaner visibility and faster decision points.
				</p>
			</div>
			<ButtonLink href="/contact" label="Book a demo" />
		</div>
	</div>
</section>
