<script lang="ts">
	import ContactForm from '$lib/components/ContactForm.svelte';
	import SeoHead from '$lib/components/SeoHead.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import { contactReasons } from '$lib/content/marketing';

	const description =
		'Book a demo, request access, or start a conversation about how Rasil can improve your order confirmation workflow.';
</script>

<SeoHead title="Contact" description={description} path="/contact" />

<section class="section pt-10">
	<div class="shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
		<div class="space-y-8">
			<SectionHeading
				eyebrow="Contact"
				title="Bring your current workflow. We’ll help you map the cleaner version."
				description="Rasil is designed around real merchant operations. Use this form to start a demo or rollout conversation."
			/>

			<div class="panel grid gap-4 p-6 sm:p-8">
				<p class="text-sm font-semibold uppercase tracking-[0.16em] text-ink-700">Best reasons to reach out</p>
				{#each contactReasons as reason (reason)}
					<div class="flex items-start gap-3 rounded-[1.25rem] border border-line-200 bg-surface-100/70 px-4 py-3">
						<span class="mt-1 h-2.5 w-2.5 rounded-full bg-sage-500"></span>
						<p class="text-sm leading-7 text-ink-700">{reason}</p>
					</div>
				{/each}
			</div>
		</div>

		<ContactForm />
	</div>
</section>
