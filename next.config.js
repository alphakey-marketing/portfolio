/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        stackbitPreview: process.env.STACKBIT_PREVIEW
    },
    trailingSlash: true,
    reactStrictMode: true,
    // Replit proxy configuration
    experimental: {
        allowedOrigins: '*'
    }
};

module.exports = nextConfig;
