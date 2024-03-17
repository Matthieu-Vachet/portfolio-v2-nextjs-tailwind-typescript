"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navItems } from "../datas/Constants";
import { HeaderVariante } from "../animations/Variantes";

const Navbar = () => {
    const [activeNav, setActiveNav] = useState("#home");

    useEffect(() => {
        const navbarHighlighter = () => {
            const sections = document.querySelectorAll("section[id]");
            let activeId = "#home";

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (
                    rect.top <= window.innerHeight / 2 &&
                    rect.top + rect.height > window.innerHeight / 2
                ) {
                    activeId = `#${section.getAttribute("id")}`;
                }
            });

            setActiveNav(activeId);
            if (activeId !== null) {
                history.pushState(null, "", activeId);
            }
        };

        window.addEventListener("scroll", navbarHighlighter);

        return () => {
            window.removeEventListener("scroll", navbarHighlighter);
        };
    }, []);

    return (
        <motion.div
            initial="initial"
            animate="animate"
            variants={HeaderVariante}
            className="fixed inset-x-0 top-0 z-10 flex justify-center"
        >
            <nav className="glassEffect w-max absolute left-1/2 transform -translate-x-1/2 top-1 flex items-center md:gap-1 sm:gap-0">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={`lg:w-2 lg:h-2 rounded-xl flex text-basic-white items-center justify-center py-1.5 lg:px-2 hover:bg-dark-white-10 active:bg-dark-white-10 sm:w-1 sm:h-1 sm:px-1.5 ${
                                activeNav === `#${item.id}` ? "navActive" : ""
                            }`}
                            onClick={(e) => {
                                e.preventDefault();
                                const element = document.querySelector(`#${item.id}`);
                                if (element) {
                                    element.scrollIntoView({ behavior: "smooth" });
                                } else {
                                    console.warn(`No element found with id ${item.id}`);
                                }
                            }}
                        >
                            <div className="text-basic-white flex items-center justify-center sm:h-1.5 sm:w-1.5 md:h-2 md:w-2">
                                <Icon title={item.title} />
                            </div>
                        </a>
                    );
                })}
            </nav>
        </motion.div>
    );
};

export default Navbar;
