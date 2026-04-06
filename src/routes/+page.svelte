<script lang="ts">
	import ButtonLink from '$lib/components/ButtonLink.svelte';
	import FAQList from '$lib/components/FAQList.svelte';
	import MetricCard from '$lib/components/MetricCard.svelte';
	import PreviewDashboard from '$lib/components/PreviewDashboard.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import SeoHead from '$lib/components/SeoHead.svelte';
	import {
		answerSources,
		benefits,
		faqs,
		integrations,
		outcomes,
		painPoints,
		productPillars,
		trustSignals,
		workflowSteps
	} from '$lib/content/marketing';
	import { site } from '$lib/site';
</script>

<SeoHead title={site.name} description={site.description} path="/" />

<section class="section overflow-hidden pt-8 sm:pt-12">
	<div class="shell grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
		<div class="space-y-8">
			<div class="eyebrow">Order confirmation and AI replies for e-commerce</div>
			<div class="space-y-6">
				<h1 class="max-w-4xl text-balance text-5xl font-semibold tracking-[-0.06em] text-ink-950 sm:text-6xl lg:text-7xl">
					Confirm orders on WhatsApp and let AI answer customer questions.
				</h1>
				<p class="max-w-2xl text-lg leading-8 text-ink-700 sm:text-xl">
					Rasil helps e-commerce businesses reduce bad orders, answer buyers faster, and connect business profile, product data, and customer questions in one system.
				</p>
			</div>

			<div class="flex flex-col gap-4 sm:flex-row">
				<ButtonLink href="/contact" label="Book a demo" />
				<ButtonLink href="/product" label="See the product" variant="secondary" />
			</div>

			<div class="grid gap-4 sm:grid-cols-3">
				<div class="panel p-5">
					<p class="text-xs font-semibold uppercase tracking-[0.16em] text-ink-700">Feature one</p>
					<p class="mt-3 text-lg font-semibold text-ink-950">WhatsApp order confirmation</p>
				</div>
				<div class="panel p-5">
					<p class="text-xs font-semibold uppercase tracking-[0.16em] text-ink-700">Feature two</p>
					<p class="mt-3 text-lg font-semibold text-ink-950">AI agent for customer questions</p>
				</div>
				<div class="panel p-5">
					<p class="text-xs font-semibold uppercase tracking-[0.16em] text-ink-700">What powers it</p>
					<p class="mt-3 text-lg font-semibold text-ink-950">Business profile + products + order data</p>
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
	<div class="shell">
		<SectionHeading
			eyebrow="What Rasil does"
			title="Two clear jobs: confirm orders and answer buyers."
			description="The product is not positioned as a vague automation layer. It solves two expensive e-commerce problems directly."
		/>

		<div class="mt-10 grid gap-5 lg:grid-cols-3">
			{#each productPillars as pillar (pillar.title)}
				<article class="panel p-6 sm:p-7">
					<h3 class="text-2xl font-semibold tracking-[-0.03em] text-ink-950">{pillar.title}</h3>
					<p class="mt-4 text-base leading-8 text-ink-700">{pillar.copy}</p>
				</article>
			{/each}
		</div>
	</div>
</section>

<section class="section">
	<div class="shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
		<SectionHeading
			eyebrow="The business problem"
			title="Why e-commerce teams feel the pain immediately."
			description="Bad orders and repeated customer questions both drain margin. Rasil is built to cut that waste."
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
			title="Connect the data, confirm the order, answer the buyer."
			description="Rasil ties commerce data to the conversation so the customer gets a useful answer and the business gets a clearer next step."
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
			eyebrow="What the AI agent uses"
			title="Better answers come from connected business context."
			description="Rasil bridges the three data layers merchants need to answer customers properly."
		/>

		<div class="mt-10 grid gap-5 lg:grid-cols-3">
			{#each answerSources as source (source.title)}
				<article class="panel p-6 sm:p-7">
					<h3 class="text-2xl font-semibold tracking-[-0.03em] text-ink-950">{source.title}</h3>
					<p class="mt-4 text-base leading-8 text-ink-700">{source.copy}</p>
				</article>
			{/each}
		</div>
	</div>
</section>

<section class="section">
	<div class="shell">
		<SectionHeading
			eyebrow="Business impact"
			title="Built to improve conversion quality and response speed."
			description="The value is not abstract. It shows up in fewer bad orders, faster buyer replies, and more reliable sales operations."
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
			title="Bring your store data into the conversation."
			description="Rasil starts by syncing the systems that already contain the product and order truth."
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
			eyebrow="Why businesses care"
			title="The product pays off when better answers lead to better orders."
			description="Rasil helps merchants bridge buyer conversation, business information, and commerce data so the operation runs with less friction."
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
			title="Common questions before rollout."
			description="The positioning is simple: order confirmation plus AI replies for customer questions, grounded in real business context."
		/>

		<FAQList items={faqs} />
	</div>
</section>

<section class="section pt-0">
	<div class="shell">
		<div class="panel-dark grid gap-8 overflow-hidden p-8 sm:p-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
			<div class="space-y-5">
				<p class="eyebrow border-white/10 bg-white/8 text-sage-300">Ready to move faster?</p>
				<h2 class="max-w-3xl text-balance text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
					Show customers faster answers and give the business better orders to fulfill.
				</h2>
				<p class="max-w-2xl text-lg leading-8 text-white/74">
					Book a demo to see order confirmation, AI replies, and connected business context working together.
				</p>
			</div>

			<div class="flex flex-col gap-4 sm:flex-row lg:justify-end">
				<ButtonLink href="/contact" label="Request access" />
				<ButtonLink href="/pricing" label="Talk to sales" variant="secondary" className="border-white/16 bg-white/8 text-white hover:bg-white/12" />
			</div>
		</div>
	</div>
</section>
