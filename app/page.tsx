"use client";
import React from "react";

import PreLoader from "./components/others/PreLoader";
import Blur from "./components/overlay/Blur";
import { GridBackground } from "./components/background/GridBackground";
import Navbar from "./sections/Navbar";

export default function Home() {
    return (
        <>
            <PreLoader />
            <Blur />
            <main className=" w-full h-full bg-basic-onyx">
                <GridBackground />
                <Navbar />
            </main>
        </>
    );
}
