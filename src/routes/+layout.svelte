<script lang="ts">
	import '@fontsource/ibm-plex-mono/latin-400.css';
	import '@fontsource/ibm-plex-mono/latin-500.css';
	import '@fontsource/ibm-plex-sans/latin-400.css';
	import favicon from '#lib/assets/favicon.svg';
	import type { LayoutProps } from './$types';
	import GitHub from '#lib/components/github.svelte';
	import Source from '#lib/components/source.svelte';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} type="image/svg+xml" />
	<meta name="theme-color" content="#151515" />
	<meta name="color-scheme" content="dark" />
</svelte:head>

<a class="skip-link" href="#collection">Skip to projects</a>

<div class="page-container">
	<div class="site-shell">
		<header class="window-bar">
			<img src={favicon} alt="" width="64" height="30" />
			<h1>batcomputer.xyz</h1>
		</header>

		{@render children()}

		<footer class="site-footer">
			<p>By <a href="https://nickesc.io">nickesc</a></p>
			<a href="https://github.com/nickesc"> GitHub <GitHub /></a>
			<a href="https://github.com/nickesc/batcomputer.xyz"> Source <Source /></a>
		</footer>
	</div>
</div>

<style>
	:global(:root) {
		--paper: oklch(19.5735% 0 none);
		--surface: oklch(17.7638% 0 none);
		--ink: oklch(91.9739% 0.00544 17.256);
		--muted: oklch(73.8019% 0 none);
		--blue: oklch(70.5967% 0.04067 248.403);
		--green: oklch(66.0155% 0.0395 126.15);
		--cyan: oklch(70.27% 0.03156 185.927);
		--magenta: oklch(67.0956% 0.06893 320.378);
		--yellow: oklch(80.8663% 0.07143 79.99);
		--rule: color-mix(in oklch, var(--ink) 16%, var(--paper));
		--quiet: color-mix(in oklch, var(--ink) 58%, var(--paper));
		--wash: color-mix(in oklch, var(--blue) 6%, var(--paper));
		--mono: 'IBM Plex Mono', ui-monospace, 'SFMono-Regular', Consolas, monospace;
		--sans: 'IBM Plex Sans', system-ui, sans-serif;
		color-scheme: dark;
		font-family: var(--mono);
		font-synthesis: none;
		font-weight: 400;
		font-size: 100%;
		line-height: 1.65;
		color: var(--ink);
		background: var(--paper);
		text-wrap: pretty;
		overflow-wrap: break-word;
		scrollbar-gutter: stable both-edges;
		scrollbar-width: thin;
		scrollbar-color: var(--muted) transparent;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		-webkit-text-size-adjust: 100%;
	}

	:global(*),
	:global(*::before),
	:global(*::after) {
		box-sizing: border-box;
		min-inline-size: 0;
	}

	:global(body) {
		margin: 0;
		min-block-size: 100svh;
	}
	:global(h1),
	:global(h2),
	:global(h3),
	:global(p),
	:global(ul) {
		margin: 0;
	}
	:global(h1),
	:global(h2),
	:global(h3) {
		text-wrap: balance;
		font-weight: 500;
	}
	:global(a) {
		color: inherit;
		text-decoration: none;
		touch-action: manipulation;
	}
	:global(img) {
		display: block;
		max-inline-size: 100%;
		block-size: auto;
	}
	:global(::selection) {
		color: var(--paper);
		background: var(--blue);
	}
	:global(:focus-visible) {
		outline: 2px solid var(--blue);
		outline-offset: 4px;
	}

	.page-container {
		padding-block: 0.5rem;
		padding-inline: 0.1rem;
		transition: padding 0.2s ease-in-out;

		@media screen and (min-width: 768px) {
			padding-block: 2.5rem;
			padding-inline: 1.125rem;
		}
	}
	.skip-link {
		position: absolute;
		inset-block-start: 0.5rem;
		inset-inline-start: 1rem;
		background: var(--ink);
		color: var(--paper);
		z-index: 2;
		clip-path: inset(50%);
	}
	.skip-link:focus {
		clip-path: none;
	}

	.site-shell {
		max-inline-size: 50rem;
		margin-inline: auto;
		border: 1px solid var(--rule);
		border-radius: 4px;
		background: var(--surface);
	}
	.site-footer {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.25rem 1.5rem;
		padding-block: 0.35rem;
		padding-inline: 1.25rem;
		background: var(--wash);
		border-block-start: 1px solid var(--rule);
		color: var(--quiet);
		font-size: 0.6875rem;
	}
	.site-footer p a {
		color: var(--muted);
	}

	.site-footer a {
		display: inline-flex;
		align-items: center;
		gap: 0.2rem;
	}

	.window-bar {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding-block: 0.9rem;
		padding-inline: 1.25rem;
		background: var(--wash);
		border-block-end: 1px solid var(--rule);
		border-start-start-radius: 4px;
		border-start-end-radius: 4px;
		color: var(--muted);
		font-size: 0.6875rem;
	}
	.window-bar img {
		inline-size: 1.5rem;
		flex: none;
	}
	.window-bar h1 {
		font: inherit;
	}

	@media (hover: hover) and (pointer: fine) {
		.site-footer a:hover {
			color: var(--ink);
			text-decoration: underline;
			text-underline-offset: 0.3em;
		}
	}

	.site-footer a:active,
	.skip-link:active {
		color: var(--yellow);
		background: var(--wash);
	}
</style>
