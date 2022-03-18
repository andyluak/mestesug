const postcss = require('postcss');
const tailwindcss = require('../tailwind.config');
const path = require('path');

module.exports = {
	stories: [
		'../stories/**/*.stories.mdx',
		'../stories/**/*.stories.@(js|jsx|ts|tsx)',
		'../components/**/*.stories.@(js|jsx|ts|tsx)',
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		{
			name: '@storybook/addon-postcss',
			options: {
				postcssLoaderOptions: {
					implementation: postcss,
					postcssOptions: {
						plugins: {
							tailwindcss, // or you can nest your options entirely here
							autoprefixer: {
								// autoprefixer options
							},
						},
					},
				},
			},
		},
	],
	framework: '@storybook/react',
	core: {
		builder: 'webpack5',
	},
};
