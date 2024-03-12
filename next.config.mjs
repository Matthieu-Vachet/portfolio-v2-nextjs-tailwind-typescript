/** @type {import('next').NextConfig} */
const nextConfig = {
    optimizeFonts: true,
    images: {
        domains: ["raw.githubusercontent.com"],
    },

    devIndicators: {
        buildActivityPosition: "top-right",
    },
    i18n: {
        locales: ["en", "fr"],
        defaultLocale: "fr",
    },
};

export default nextConfig;
