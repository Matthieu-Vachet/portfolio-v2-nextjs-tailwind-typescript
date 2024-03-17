import type { Config } from "tailwindcss";

const svgToDataUri = require("mini-svg-data-uri");

const colors = require("tailwindcss/colors");
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            sm: "320px",
            md: "641px",
            lg: "1024px",
            xl: "1440px",
            "2xl": "1600px",
        },
        extend: {
            colors: {
                basicOnyx: "#181818",
                "basic-white": "#fffff0",
                "strock-glass": "rgba(182, 181, 187, 0.4)",
                "basic-black": "#0d0d0d",
                "basic-dark-gray": "#808080",
                "dark-white-10": "rgba(255, 255, 255, 0.1)",
                "glass-glass-dark-60": "rgba(24, 24, 29, 0.6)",
                "glass-glass-dark-30": "rgba(24, 24, 29, 0.3)",
                "border-glass": "rgba(255, 255, 255, 0.5)",
                "border-glass-btn": "rgba(128, 128, 128, 0.1)",
                "button-1": "#0ce39a",
                "button-2": "#69007f",
                "button-3": "#fc0987",
            },
            spacing: {
                "1": "1rem",
                "1.5": "1.5rem",
                "2": "2rem",
                "3": "3rem",
                "4": "4rem",
                "5": "5rem",
                "6": "6rem",
                "7": "7rem",
                "8": "8rem",
                "9": "9rem",
                "10": "10rem",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [
        require("tailwind-scrollbar"),
        function ({ matchUtilities, theme }: any) {
            matchUtilities(
                {
                    "bg-grid": (value: any) => ({
                        backgroundImage: `url("${svgToDataUri(
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
                        )}")`,
                    }),
                    "bg-grid-small": (value: any) => ({
                        backgroundImage: `url("${svgToDataUri(
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
                        )}")`,
                    }),
                    "bg-dot": (value: any) => ({
                        backgroundImage: `url("${svgToDataUri(
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`,
                        )}")`,
                    }),
                },
                { values: flattenColorPalette(theme("backgroundColor")), type: "color" },
            );
        },
    ],
};
export default config;
