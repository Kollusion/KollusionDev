"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { useMediaQuery } from 'react-haiku';
import {
    LucideIcon,
    CircleArrowRightIcon,
    AppWindowIcon,
    HammerIcon,
    ShoppingBagIcon,
} from "lucide-react";

import { useTranslations } from 'next-intl';

type Props = {
    icon: LucideIcon;
    href: string;
    title: string;
    desc: string;
    delay: number;
};

export const HeroCardButton = ({ icon: Icon, title, desc, delay, href }: Props) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        // a вместо Link - что бы не тупило бл
        <a href={href} className="flex-1 group">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay, ease: 'easeInOut' }}
                className="select-none h-full backdrop-blur-xl bg-muted/20 cursor-pointer p-6 space-y-4 hover:scale-99 active:scale-97 border hover:text-primary duration-500 rounded-xl shadow-md hover:shadow-primary/10 active:shadow-primary/20"
            >
                <div className="flex justify-between items-center">
                    <h2 className="font-medium text-2xl flex items-center gap-2">
                        {title} <Icon />
                    </h2>
                    <CircleArrowRightIcon className="text-muted group-hover:-rotate-z-45 group-active:-rotate-z-60 duration-500" />
                </div>
                <h3 className="text-muted-foreground">{desc}</h3>
            </motion.div>
        </a>
    );
};

export const HeroCardSection = () => {

    const breakpoint = useMediaQuery('(max-width: 64rem)', null);
    const t = useTranslations('HeroCardButtons');

    return (
        <div className="min-h-50 flex p-4 gap-4 max-lg:flex-col">
            <HeroCardButton
                icon={AppWindowIcon}
                href="#PortfolioSection"
                title={t('portfolio.title')}
                desc={t('portfolio.description')}
                delay={breakpoint ? 0.1 : 2.1}
            />
            <HeroCardButton
                icon={HammerIcon}
                href="#StackSection"
                title={t('stack.title')}
                desc={t('stack.description')}
                delay={breakpoint ? 0.5 : 2.5}
            />
            <HeroCardButton
                icon={ShoppingBagIcon}
                href="#ServicesSection"
                title={t('services.title')}
                desc={t('services.description')}
                delay={breakpoint ? 0.3 : 2.3}
            />
        </div>
    );
};
