module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#5C1B10',
				secondary: '#C6C2BF',
				'primary-light': '#B66867',
			},
			spacing: {
				desktop: '4rem',
				tablet: '2rem',
				mobile: '1rem',
			},
		},
	},
	plugins: [],
};
