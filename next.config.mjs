/** @type {import('next').NextConfig} */
const nextConfig = {
    optimizeFonts: true,
    images: {
        domains: ["raw.githubusercontent.com"],
    },

    devIndicators: {
        buildActivityPosition: "top-right",
    },
};

export default nextConfig;
