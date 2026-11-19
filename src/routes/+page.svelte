<script lang="ts">
	import { groups } from '#lib/data/catalog.js';
	import socialImage from '#lib/assets/og.png';
	import ProjectRow from '#lib/components/ProjectRow.svelte';

	const canonicalUrl = 'https://batcomputer.xyz/';
	const socialImageUrl = new URL(socialImage, canonicalUrl).href;
</script>

<svelte:head>
	<title>batcomputer.xyz</title>
	<link rel="canonical" href={canonicalUrl} />
	<meta
		name="description"
		content="A collection of apps, game tools, experiments, and APIs running on batcomputer.xyz."
	/>
	<meta property="og:title" content="batcomputer.xyz" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={canonicalUrl} />
	<meta
		property="og:description"
		content="Game tools, web experiments, and APIs. All in one place."
	/>
	<meta property="og:image" content={socialImageUrl} />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1732" />
	<meta property="og:image:height" content="908" />
</svelte:head>

<main class="groups" id="collection" tabindex="-1">
	{#each groups as group}
		<section class="project-group color-{group.color}" aria-labelledby={group.id}>
			<h2 id={group.id}>{group.name}</h2>
			<ul class="project-list">
				{#each group.projects as project}
					<ProjectRow {project} />
				{/each}
			</ul>
		</section>
	{/each}
</main>

<style>
	.groups {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		padding-block: 1rem;
		padding-inline: 1.5rem;
		transition: padding 0.2s ease-in-out;

		@media screen and (min-width: 768px) {
			padding-block: 1.25rem;
			padding-inline: 3rem;
		}
	}
	.color-green {
		--group-color: var(--green);
	}
	.color-yellow {
		--group-color: var(--yellow);
	}
	.color-magenta {
		--group-color: var(--magenta);
	}
	.project-group h2 {
		color: var(--group-color);
		font-size: 0.8125rem;
		letter-spacing: 0.04em;
		padding-block-end: 0.75rem;
	}
	.group-heading {
		display: flex;
		align-items: baseline;
		gap: 1rem;
		padding-block-end: 0.75rem;
	}
	.group-heading h2 {
		color: var(--group-color);
		font-size: 0.8125rem;
		letter-spacing: 0.04em;
	}
	.group-marker {
		color: var(--group-color);
		margin-inline-end: 0.65rem;
	}
	.group-count {
		color: var(--quiet);
		font-size: 0.6875rem;
		font-variant-numeric: tabular-nums;
	}
	.project-list {
		padding: 0;
		padding-inline-start: 1.5rem;
		border-inline-start: 1px solid var(--rule);
		list-style: none;
	}
</style>
