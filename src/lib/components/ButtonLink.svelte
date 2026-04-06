<script lang="ts">
	import { resolve } from '$app/paths';

	type Variant = 'primary' | 'secondary' | 'ghost';

	type Props = {
		href: string;
		label: string;
		variant?: Variant;
		className?: string;
	};

	let { href, label, variant = 'primary', className = '' }: Props = $props();

	const variants: Record<Variant, string> = {
		primary: 'button-primary',
		secondary: 'button-secondary',
		ghost: 'button-ghost'
	};
</script>

<a
	href={resolve(href as Parameters<typeof resolve>[0])}
	class={`inline-flex items-center gap-2 ${variants[variant]} ${className}`}
>
	{label}
</a>
