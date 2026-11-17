export type Project = {
	name: string;
	description: string;
	url: string;
	domain: string;
	source?: string;
	website?: { label: string; url: string };
};

export type Group = {
	id: string;
	name: string;
	color: 'green' | 'yellow' | 'magenta';
	projects: Project[];
};

export const groups: Group[] = [
	{
		id: 'game-tools',
		name: 'Game tools',
		color: 'green',
		projects: [
			{
				name: 'Pokémon Clock Reset',
				description: 'Generate a clock reset password for Pokémon Gold, Silver, and Crystal.',
				url: 'https://gsc-clock-util.batcomputer.xyz',
				domain: 'gsc-clock-util.batcomputer.xyz',
				source: 'https://github.com/nickesc/gsc-clock-util'
			},
			{
				name: 'Pokémon Team Analyzer',
				description: "Check a Showdown team's offensive coverage and defensive weaknesses.",
				url: 'https://pokemon-analysis.batcomputer.xyz',
				domain: 'pokemon-analysis.batcomputer.xyz'
			},
			{
				name: 'TTRPG Character Profile',
				description: "Build a character's personality and traits, then save an image or JSON file.",
				url: 'https://dnd.batcomputer.xyz',
				domain: 'dnd.batcomputer.xyz',
				source: 'https://github.com/nickesc/dnd-interactive-sheet'
			}
		]
	},
	{
		id: 'experiments',
		name: 'Experiments',
		color: 'yellow',
		projects: [
			{
				name: 'Article Word Cloud',
				description: 'Turn a news article into an interactive, three-dimensional word cloud.',
				url: 'https://word-cloud.batcomputer.xyz',
				domain: 'word-cloud.batcomputer.xyz',
				source: 'https://github.com/nickesc/word-cloud-gen'
			},
			{
				name: 'Not-Reddit',
				description:
					'Try a small message board with posts, replies, and likes that reset on refresh.',
				url: 'https://not-reddit.batcomputer.xyz',
				domain: 'not-reddit.batcomputer.xyz',
				source: 'https://github.com/nickesc/not-reddit'
			}
		]
	},
	{
		id: 'apis',
		name: 'APIs',
		color: 'magenta',
		projects: [
			{
				name: 'My Girlfriend Is Curious',
				description: 'A public JSON API for what nickesc is listening to on Spotify.',
				url: 'https://mgic.batcomputer.xyz/current',
				domain: 'mgic.batcomputer.xyz/current',
				source: 'https://github.com/nickesc/My-Girlfriend-is-Curious',
				website: { label: 'Playback page', url: 'https://nickesc.io/mgic' }
			}
		]
	}
];
