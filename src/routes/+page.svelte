<script lang="ts">
	import ButtonLink from '$lib/components/ButtonLink.svelte';
	import FAQList from '$lib/components/FAQList.svelte';
	import MetricCard from '$lib/components/MetricCard.svelte';
	import PreviewDashboard from '$lib/components/PreviewDashboard.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import SeoHead from '$lib/components/SeoHead.svelte';
	import { benefits, faqs, integrations, outcomes, painPoints, trustSignals, workflowSteps } from '$lib/content/marketing';
	import { site } from '$lib/site';
</script>

<SeoHead title={site.name} description={site.description} path="/" />

<section class="section overflow-hidden pt-8 sm:pt-12">
	<div class="shell grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
		<div class="space-y-8">
			<div class="eyebrow">Post-order control for WhatsApp-first commerce</div>
			<div class="space-y-6">
				<h1 class="max-w-4xl text-balance text-5xl font-semibold tracking-[-0.06em] text-ink-950 sm:text-6xl lg:text-7xl">
					Confirm orders faster. Reduce chaos. Run operations with clearer control.
				</h1>
				<p class="max-w-2xl text-lg leading-8 text-ink-700 sm:text-xl">
					Rasil helps merchants turn post-order messaging into a structured operating layer, so teams can confirm demand on WhatsApp, handle customer responses cleanly, and move forward with more certainty.
				</p>
			</div>

			<div class="flex flex-col gap-4 sm:flex-row">
				<ButtonLink href="/contact" label="Book a demo" />
				<ButtonLink href="/product" label="See how it works" variant="secondary" />
			</div>

			<div class="grid gap-4 sm:grid-cols-3">
				<div class="panel p-5">
					<p class="text-xs font-semibold uppercase tracking-[0.16em] text-ink-700">Core use case</p>
					<p class="mt-3 text-lg font-semibold text-ink-950">WhatsApp order confirmation</p>
				</div>
				<div class="panel p-5">
					<p class="text-xs font-semibold uppercase tracking-[0.16em] text-ink-700">Designed for</p>
					<p class="mt-3 text-lg font-semibold text-ink-950">Merchant ops teams and founders</p>
				</div>
				<div class="panel p-5">
					<p class="text-xs font-semibold uppercase tracking-[0.16em] text-ink-700">Starting point</p>
					<p class="mt-3 text-lg font-semibold text-ink-950">Shopify today, more platforms next</p>
				</div>
			</div>
		</div>

		<PreviewDashboard />
	</div>
</section>

<section class="section-tight">
	<div class="shell">
		<div class="panel flex flex-wrap items-center gap-3 p-4 sm:gap-4 sm:p-5">
			{#each trustSignals as signal (signal)}
				<div class="rounded-full border border-line-200 bg-surface-100/80 px-4 py-2 text-sm font-semibold text-ink-700">
					{signal}
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="section">
	<div class="shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
		<SectionHeading
			eyebrow="The operational problem"
			title="When post-order communication is messy, the whole workflow pays for it."
			description="Rasil is designed for teams that need fast confirmation and consistent handling, not another vague messaging tool."
		/>

		<div class="grid gap-5">
			{#each painPoints as point (point.title)}
				<article class="panel p-6 sm:p-7">
					<h3 class="text-2xl font-semibold tracking-[-0.03em] text-ink-950">{point.title}</h3>
					<p class="mt-4 text-base leading-8 text-ink-700">{point.copy}</p>
				</article>
			{/each}
		</div>
	</div>
</section>

<section class="section">
	<div class="shell">
		<SectionHeading
			eyebrow="How it works"
			title="A clear three-step model for cleaner confirmation operations."
			description="The flow is simple on the surface, but precise underneath. That is what makes it useful to operators."
		/>

		<div class="mt-10 grid gap-5 lg:grid-cols-3">
			{#each workflowSteps as item (item.step)}
				<article class="panel grid gap-5 p-6 sm:p-8">
					<p class="text-sm font-semibold uppercase tracking-[0.18em] text-sage-500">{item.step}</p>
					<h3 class="text-2xl font-semibold tracking-[-0.03em] text-ink-950">{item.title}</h3>
					<p class="text-base leading-8 text-ink-700">{item.copy}</p>
				</article>
			{/each}
		</div>
	</div>
</section>

<section class="section">
	<div class="shell">
		<SectionHeading
			eyebrow="What teams gain"
			title="A more credible operating layer for post-order commerce."
			description="Every part of the product language is anchored in workflow clarity, customer response handling, and operational control."
		/>

		<div class="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
			{#each benefits as benefit (benefit.title)}
				<article class="panel p-6 sm:p-7">
					<h3 class="text-xl font-semibold text-ink-950">{benefit.title}</h3>
					<p class="mt-4 text-base leading-8 text-ink-700">{benefit.copy}</p>
				</article>
			{/each}
		</div>
	</div>
</section>

<section class="section">
	<div class="shell">
		<SectionHeading
			eyebrow="Integrations"
			title="Start with the storefronts merchants already rely on."
			description="Rasil begins where operational value is immediate, then expands the same confirmation model across more commerce stacks."
		/>

		<div class="mt-10 grid gap-5 lg:grid-cols-3">
			{#each integrations as integration (integration.name)}
				<article class="panel p-6 sm:p-7">
					<div class="flex items-center justify-between gap-4">
						<h3 class="text-2xl font-semibold tracking-[-0.03em] text-ink-950">{integration.name}</h3>
						<span class="rounded-full border border-sage-300 bg-sage-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-sage-500">
							{integration.status}
						</span>
					</div>
					<p class="mt-4 text-base leading-8 text-ink-700">{integration.copy}</p>
				</article>
			{/each}
		</div>
	</div>
</section>

<section class="section">
	<div class="shell">
		<SectionHeading
			eyebrow="Operational outcomes"
			title="Metrics framed around workflow control, not chatbot theater."
			description="The product should make the operational picture clearer in minutes, not just generate another dashboard no one trusts."
		/>

		<div class="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
			{#each outcomes as outcome, index (outcome.label)}
				<MetricCard {...outcome} highlight={index === 0} />
			{/each}
		</div>
	</div>
</section>

<section class="section">
	<div class="shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
		<SectionHeading
			eyebrow="FAQ"
			title="Questions teams ask before they put order confirmation on a firmer system."
			description="The site keeps the story clear and honest: serious operations product, early-stage growth path, and room for tailored rollout."
		/>

		<FAQList items={faqs} />
	</div>
</section>

<section class="section pt-0">
	<div class="shell">
		<div class="panel-dark grid gap-8 overflow-hidden p-8 sm:p-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
			<div class="space-y-5">
				<p class="eyebrow border-white/10 bg-white/8 text-sage-300">Ready to operationalize confirmation?</p>
				<h2 class="max-w-3xl text-balance text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
					Give your team a cleaner way to confirm demand and keep customer conversations under control.
				</h2>
				<p class="max-w-2xl text-lg leading-8 text-white/74">
					Book a demo, request access, or talk through how Rasil could fit your current order workflow.
				</p>
			</div>

			<div class="flex flex-col gap-4 sm:flex-row lg:justify-end">
				<ButtonLink href="/contact" label="Request access" />
				<ButtonLink href="/pricing" label="Talk to sales" variant="secondary" className="border-white/16 bg-white/8 text-white hover:bg-white/12" />
			</div>
		</div>
	</div>
</section>
