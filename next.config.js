/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	serverRuntimeConfig: {
		secret: 'acesta e secretul meu si nu il zic la nimeni',
	},
};

module.exports = nextConfig;
