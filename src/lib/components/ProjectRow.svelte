<script lang="ts">
	import type { Project } from '#lib/data/catalog.js';

	let { project }: { project: Project } = $props();
</script>

<li class="project">
	<a class="project-link" href={project.url}>
		<h3>
			<span>{project.name}</span><span class="outbound" aria-hidden="true">↗</span>
		</h3>
		<span class="project-domain">{project.domain}</span>
	</a>
	<p class="project-description">{project.description}</p>
	{#if project.source || project.website}
		<div class="project-extras">
			{#if project.website}
				<a href={project.website.url}>{project.website.label}</a>
			{/if}
			{#if project.source}
				<a href={project.source} aria-label={`Source code for ${project.name}`}> Source </a>
			{/if}
		</div>
	{/if}
</li>

<style>
	.project {
		padding-block: 0.5rem 0.75rem;
	}
	.project h3 {
		display: flex;
		align-items: baseline;
		gap: 0.75rem;
		font-size: 0.9375rem;
		line-height: 1.5;
	}
	.project-link {
		display: inline-block;
		max-inline-size: 100%;
	}
	.outbound {
		color: var(--quiet);
		font-weight: 400;
		font-size: 0.8em;
		flex: none;
	}
	.project-description {
		margin-block-start: 0.6rem;
		color: var(--muted);
		font-family: var(--sans);
		font-size: 0.8125rem;
		line-height: 1.8;
	}
	.project-domain {
		display: block;
		inline-size: fit-content;
		max-inline-size: 100%;
		color: var(--cyan);
		font-size: 0.6875rem;
		overflow-wrap: anywhere;
	}
	.project-extras {
		margin-block-start: 0.6rem;
		display: flex;
		flex-wrap: wrap;
		gap: 0.25rem 1.25rem;
		align-items: center;
	}
	.project-extras a {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		color: var(--quiet);
		font-size: 0.6875rem;
	}

	@media (hover: hover) and (pointer: fine) {
		.project-link:hover,
		.project-link:hover .outbound {
			color: var(--blue);
		}
		.project-extras a:hover,
		.project-link:hover .project-domain {
			color: var(--blue);
			text-decoration: underline;
			text-underline-offset: 0.3em;
		}
	}

	.project a:active {
		color: var(--yellow);
		background: var(--wash);
	}
</style>
