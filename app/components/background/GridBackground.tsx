import React from "react";

export function GridBackground() {
    return (
        <div className="h-full w-full dark:bg-basic-onyx bg-basic-white dark:bg-grid-white/[0.2] bg-grid-white/[0.2] relative flex items-center justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-basic-onyx bg-basic-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8"></p>
        </div>
    );
}
