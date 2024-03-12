"use client";
import React, { useState } from "react";

import PreLoader from "./components/others/PreLoader";
import Blur from "./components/overlay/Blur";

export default function Home() {
    return (
        <>
            <PreLoader />
            <Blur />
        </>
    );
}
