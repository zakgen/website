<script lang="ts">
	type Props = {
		eyebrow?: string;
		title: string;
		description?: string;
		align?: 'left' | 'center';
		className?: string;
	};

	let { eyebrow, title, description, align = 'left', className = '' }: Props = $props();
</script>

<div class={`${align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} ${className}`}>
	{#if eyebrow}
		<p class="eyebrow">{eyebrow}</p>
	{/if}
	<h2 class="mt-5 text-balance text-3xl font-semibold tracking-[-0.04em] text-ink-950 sm:text-5xl">
		{title}
	</h2>
	{#if description}
		<p class="mt-5 text-lg leading-8 text-ink-700">{description}</p>
	{/if}
</div>
