<script lang="ts">
	import { site } from '$lib/site';

	function handleSubmit(event: SubmitEvent) {
		event.preventDefault();

		const form = event.currentTarget as HTMLFormElement;
		const data = new FormData(form);
		const entries = Object.fromEntries(data);

		const subject = encodeURIComponent(`Rasil inquiry from ${entries.name || 'a merchant team'}`);
		const body = encodeURIComponent(
			[
				`Name: ${entries.name || ''}`,
				`Company: ${entries.company || ''}`,
				`Store URL: ${entries.store || ''}`,
				`Platform: ${entries.platform || ''}`,
				`Monthly order volume: ${entries.volume || ''}`,
				`What do you need: ${entries.message || ''}`
			].join('\n')
		);

		window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
	}
</script>

<form class="panel grid gap-5 p-6 sm:p-8" onsubmit={handleSubmit}>
	<div class="grid gap-5 sm:grid-cols-2">
		<label class="grid gap-2 text-sm font-semibold text-ink-900">
			Name
			<input class="form-input" name="name" placeholder="Your name" required />
		</label>
		<label class="grid gap-2 text-sm font-semibold text-ink-900">
			Company
			<input class="form-input" name="company" placeholder="Store or brand name" required />
		</label>
	</div>

	<div class="grid gap-5 sm:grid-cols-2">
		<label class="grid gap-2 text-sm font-semibold text-ink-900">
			Store URL
			<input class="form-input" name="store" placeholder="https://yourstore.com" />
		</label>
		<label class="grid gap-2 text-sm font-semibold text-ink-900">
			Platform
			<select class="form-input" name="platform">
				<option>Shopify</option>
				<option>YouCan</option>
				<option>WooCommerce</option>
				<option>Custom / Other</option>
			</select>
		</label>
	</div>

	<div class="grid gap-5 sm:grid-cols-2">
		<label class="grid gap-2 text-sm font-semibold text-ink-900">
			Monthly order volume
			<select class="form-input" name="volume">
				<option>Under 500</option>
				<option>500 to 2,000</option>
				<option>2,000 to 10,000</option>
				<option>10,000+</option>
			</select>
		</label>
		<div class="grid content-end rounded-[1.5rem] border border-line-200 bg-surface-100/80 p-5 text-sm text-ink-700">
			<p class="font-semibold text-ink-900">Fast next step</p>
			<p>Submitting opens a pre-filled email draft so your team can start the conversation immediately.</p>
		</div>
	</div>

	<label class="grid gap-2 text-sm font-semibold text-ink-900">
		What do you need help with?
		<textarea
			class="form-input min-h-36 resize-y"
			name="message"
			placeholder="Tell us about your order flow, current confirmation process, and where operations start to break down."
			required
		></textarea>
	</label>

	<div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
		<p class="text-sm text-ink-700">
			Prefer direct outreach? Email
			<a class="font-semibold text-ink-900 underline decoration-sage-500 underline-offset-4" href={`mailto:${site.email}`}>
				{site.email}
			</a>
		</p>
		<button class="button-primary cursor-pointer border-0" type="submit">Request access</button>
	</div>
</form>
