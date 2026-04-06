<script lang="ts">
	const queue = [
		{ order: '#18421', merchant: 'Nour Home', amount: '890 MAD', status: 'Awaiting customer reply' },
		{ order: '#18418', merchant: 'Atlas Beauty', amount: '540 MAD', status: 'Edit request detected' },
		{ order: '#18412', merchant: 'Casa Active', amount: '1,120 MAD', status: 'Confirmed and ready' }
	];

	const outcomes = [
		{ label: 'Confirmed', tone: 'success' },
		{ label: 'Declined', tone: 'muted' },
		{ label: 'Edit request', tone: 'accent' },
		{ label: 'Human handoff', tone: 'dark' }
	];

	const metrics = [
		{ label: 'Active sessions', value: '128' },
		{ label: 'Need review', value: '14' },
		{ label: 'Recovered edits', value: '23' }
	];
</script>

<section class="panel schematic overflow-hidden p-6 sm:p-8">
	<div class="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
		<div class="grid gap-4">
			<div class="flex items-center justify-between">
				<div>
					<p class="text-sm font-semibold uppercase tracking-[0.18em] text-ink-700">Confirmation queue</p>
					<p class="mt-2 text-2xl font-semibold text-ink-950">Operational visibility without the noise</p>
				</div>
				<div class="rounded-full border border-line-200 bg-white/90 px-3 py-1 text-xs font-semibold text-ink-700">
					Live queue
				</div>
			</div>

			<div class="grid gap-3">
				{#each queue as item (item.order)}
					<div class="rounded-[1.5rem] border border-line-200 bg-white/92 p-4 shadow-[0_12px_30px_rgba(31,50,66,0.07)]">
						<div class="flex flex-wrap items-center justify-between gap-3">
							<div>
								<p class="text-sm font-semibold text-ink-950">{item.order}</p>
								<p class="mt-1 text-sm text-ink-700">{item.merchant}</p>
							</div>
							<div class="text-right">
								<p class="text-sm font-semibold text-ink-950">{item.amount}</p>
								<p class="mt-1 text-xs uppercase tracking-[0.16em] text-sage-500">{item.status}</p>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<div class="grid gap-4">
			<div class="panel-dark grid gap-5 p-6">
				<div class="flex flex-wrap items-center justify-between gap-4">
					<div>
						<p class="text-sm font-semibold uppercase tracking-[0.18em] text-sage-300">Session detail</p>
						<p class="mt-2 text-2xl font-semibold text-white">Customer requested a quantity change</p>
					</div>
					<div class="rounded-full border border-white/12 bg-white/8 px-3 py-1 text-xs font-semibold text-white/80">
						Escalation recommended
					</div>
				</div>

				<div class="grid gap-3 rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-sm text-white/74">
					<p>
						<span class="font-semibold text-white">09:12</span>
						Confirmation message delivered on WhatsApp
					</p>
					<p>
						<span class="font-semibold text-white">09:16</span>
						Customer asked to reduce quantity from 3 units to 2
					</p>
					<p>
						<span class="font-semibold text-white">09:18</span>
						Order flagged for operator validation before dispatch
					</p>
				</div>

				<div class="grid gap-3 sm:grid-cols-2">
					{#each outcomes as outcome (outcome.label)}
						<div
							class={`rounded-[1.25rem] border px-4 py-3 text-sm font-semibold ${
								outcome.tone === 'success'
									? 'border-sage-400/50 bg-sage-400/15 text-sage-300'
									: outcome.tone === 'accent'
										? 'border-white/12 bg-white/7 text-white'
										: outcome.tone === 'dark'
											? 'border-white/18 bg-ink-900/70 text-white'
											: 'border-white/8 bg-white/5 text-white/72'
							}`}
						>
							{outcome.label}
						</div>
					{/each}
				</div>
			</div>

			<div class="grid gap-4 sm:grid-cols-3">
				{#each metrics as metric (metric.label)}
					<div class="rounded-[1.5rem] border border-line-200 bg-white/88 p-4">
						<p class="text-xs font-semibold uppercase tracking-[0.16em] text-ink-700">{metric.label}</p>
						<p class="mt-2 text-3xl font-semibold text-ink-950">{metric.value}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
