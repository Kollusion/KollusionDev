"use client"

import React, { useLayoutEffect, useState } from "react";
import { motion } from "motion/react";

const Loader = () => {
    const [visibleLoader, setVisibleLoader] = useState<boolean>(true)
    const [activeloader, setActiveLoader] = useState<boolean>(true)

    const hideOnVisited = false

    useLayoutEffect(() => {

        const hasVisited = sessionStorage.getItem('hasVisited');

        if (!hasVisited || !hideOnVisited) {
            sessionStorage.setItem('hasVisited', 'true');
            const visible = setTimeout(() => {
                setVisibleLoader(false)
            }, 2000)

            const active = setTimeout(() => {
                setActiveLoader(false)
            }, 2500)

            const clearTimer = () => {
                clearTimeout(active)
                clearTimeout(visible)
            }

            return clearTimer
        }
        else {
            setVisibleLoader(false);
            setActiveLoader(false);
        }
    }, [])


    if (!activeloader) return null

    return (
        <div className={`fixed w-full h-full bg-background z-50 flex justify-center items-center duration-500 ${visibleLoader ? '' : 'opacity-0 pointer-events-none'}`}>
            <div className="relative flex flex-col items-center">
                <h3 className="text-5xl font-bold">
                    KOLLUSION<span className="font-mono text-4xl">.pro</span>
                </h3>

                <motion.svg
                    viewBox="0 0 220 36"
                    preserveAspectRatio="none"
                    className="w-90 h-16 absolute -bottom-10"
                >

                    <motion.path
                        d="M 0 18
               C 18 5, 40 30, 70 18
               C 100 6, 120 30, 150 18
               C 180 6, 200 30, 220 18"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="transparent"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0.8 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2, ease: 'easeInOut' }}
                    />
                </motion.svg>
            </div>
        </div>
    )
};

export default Loader;
