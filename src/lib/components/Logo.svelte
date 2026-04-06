<script lang="ts">
	type Props = {
		variant?: 'symbol' | 'wordmark';
		className?: string;
	};

	let { variant = 'symbol', className = '' }: Props = $props();

	const symbol = '/brand/rasil-symbol.png';
	const wordmark = '/brand/rasil-wordmark.webp';
</script>

{#if variant === 'symbol'}
	<img class={`aspect-square w-12 rounded-2xl object-contain ${className}`} src={symbol} alt="Rasil symbol" />
{:else}
	<img
		class={`h-auto w-full max-w-[15rem] object-contain ${className}`}
		src={wordmark}
		alt="Rasil wordmark"
	/>
{/if}
