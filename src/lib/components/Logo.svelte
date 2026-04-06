<script lang="ts">
	type Props = {
		compact?: boolean;
		className?: string;
	};

	let { compact = false, className = '' }: Props = $props();

	const symbol = '/brand/rasil-symbol.png';
	const wordmark = '/brand/rasil-wordmark.webp';
</script>

{#if compact}
	<img class={`h-12 w-12 rounded-2xl object-cover ${className}`} src={symbol} alt="Rasil symbol" />
{:else}
	<img
		class={`h-auto w-full max-w-[15rem] object-contain ${className}`}
		src={wordmark}
		alt="Rasil wordmark"
	/>
{/if}
