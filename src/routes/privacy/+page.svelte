<script lang="ts">
	import SeoHead from '$lib/components/SeoHead.svelte';

	const description = 'Basic privacy information for the public-facing Rasil website.';
</script>

<SeoHead title="Privacy" description={description} path="/privacy" />

<section class="section pt-10">
	<div class="shell">
		<article class="prose prose-slate max-w-4xl rounded-[2rem] border border-line-200 bg-white/92 p-8 shadow-[0_20px_60px_rgba(31,50,66,0.08)] sm:p-10">
			<h1>Privacy</h1>
			<p>
				This website is intended to explain Rasil and support early commercial conversations. If you contact us, the information you share is used only to respond to your inquiry and evaluate fit.
			</p>
			<h2>What we collect</h2>
			<p>Basic contact information, business context, and any operational details you voluntarily provide through the contact flow.</p>
			<h2>How we use it</h2>
			<p>To respond to your request, schedule a demo, or continue a commercial conversation about the product.</p>
			<h2>Data handling</h2>
			<p>
				This public site does not attempt to expose internal merchant data or dashboard activity. Update this policy with fuller legal language before broad public launch.
			</p>
		</article>
	</div>
</section>
