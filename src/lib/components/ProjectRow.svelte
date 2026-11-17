<script lang="ts">
	import type { Project } from '#lib/data/catalog.js';

	let { project }: { project: Project } = $props();
</script>

<li class="project">
	<div class="project-copy">
		<h3>
			<a class="project-link" href={project.url}>
				<span>{project.name}</span><span class="outbound" aria-hidden="true">↗</span>
			</a>
		</h3>
		<p class="project-description">{project.description}</p>
		<a class="project-domain" href={project.url}>
			{project.domain}
		</a>
	</div>
	{#if project.source || project.website}
		<div class="project-extras">
			{#if project.website}
				<a href={project.website.url}>{project.website.label} <span aria-hidden="true">↗</span></a>
			{/if}
			{#if project.source}
				<a href={project.source} aria-label={`Source code for ${project.name}`}>
					<span class="source-symbol" aria-hidden="true">&lt;/&gt;</span> Source
				</a>
			{/if}
		</div>
	{/if}
</li>

<style>
	.project {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		column-gap: 1.5rem;
		padding-block: 0.5rem 0.75rem;
	}
	.project-copy {
		flex: 1 1 24rem;
	}
	.project h3 {
		font-size: 0.9375rem;
		line-height: 1.5;
	}
	.project-link {
		display: inline-flex;
		align-items: baseline;
		gap: 0.75rem;
		min-block-size: 44px;
		padding-block: 0.6rem;
	}
	.outbound {
		color: var(--quiet);
		font-weight: 400;
		font-size: 0.8em;
		flex: none;
	}
	.project-description {
		color: var(--muted);
		font-size: 0.8125rem;
		line-height: 1.8;
	}
	.project-domain {
		display: block;
		position: relative;
		inline-size: fit-content;
		max-inline-size: 100%;
		color: var(--cyan);
		font-size: 0.6875rem;
		margin-block-start: 0.6rem;
		overflow-wrap: anywhere;
	}
	.project-domain::after {
		content: '';
		position: absolute;
		inset-block: min(0px, calc((100% - 44px) / 2));
		inset-inline: 0;
	}
	.project-extras {
		display: flex;
		flex-wrap: wrap;
		gap: 0.25rem 1.25rem;
		align-items: center;
	}
	.project-extras a {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		min-block-size: 44px;
		min-inline-size: 44px;
		color: var(--quiet);
		font-size: 0.6875rem;
	}
	.source-symbol {
		font-size: 0.75em;
	}

	@media (hover: hover) and (pointer: fine) {
		.project-link:hover,
		.project-link:hover .outbound {
			color: var(--blue);
		}
		.project-extras a:hover,
		.project-domain:hover {
			color: var(--ink);
			text-decoration: underline;
			text-underline-offset: 0.3em;
		}
	}

	.project a:active {
		color: var(--yellow);
		background: var(--wash);
	}
</style>
