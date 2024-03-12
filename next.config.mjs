/** @type {import('next').NextConfig} */
const nextConfig = {
    optimizeFonts: true,
    images: {
        domains: ["raw.githubusercontent.com"],
    },

    devIndicators: {
        buildActivityPosition: "top-right",
    },
    experimental: {
        legacyBrowsers: false,
        swcFileReading: true,
        appDir: true,
    },
};

export default nextConfig;
