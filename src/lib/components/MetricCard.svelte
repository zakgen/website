<script lang="ts">
	type Props = {
		value: string;
		label: string;
		copy: string;
		highlight?: boolean;
	};

	let { value, label, copy, highlight = false }: Props = $props();
</script>

<article class={`${highlight ? 'panel-dark' : 'panel'} grid gap-4 p-6`}>
	<p class={`text-sm font-semibold uppercase tracking-[0.18em] ${highlight ? 'text-sage-300' : 'text-ink-700'}`}>
		{label}
	</p>
	<p class={`text-4xl font-semibold sm:text-5xl ${highlight ? 'text-white' : 'text-ink-950'}`}>{value}</p>
	<p class={`text-sm leading-7 ${highlight ? 'text-white/72' : 'text-ink-700'}`}>{copy}</p>
</article>
