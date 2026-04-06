<script lang="ts">
	type Item = {
		question: string;
		answer: string;
	};

	type Props = {
		items: readonly Item[];
	};

	let { items }: Props = $props();
</script>

<div class="grid gap-4">
	{#each items as item (item.question)}
		<details class="panel group p-6" name="faq">
			<summary class="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-semibold text-ink-950">
				{item.question}
				<span class="text-2xl leading-none text-sage-500 transition group-open:rotate-45">+</span>
			</summary>
			<p class="mt-4 max-w-3xl text-base leading-7 text-ink-700">{item.answer}</p>
		</details>
	{/each}
</div>
