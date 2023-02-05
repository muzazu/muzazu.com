const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = withContentlayer({
    experimental: {
        appDir: true,
    },
});

module.exports = nextConfig;
