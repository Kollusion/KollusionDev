'use client'

import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';

interface TechStackCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    children: React.ReactNode;
}

const TechStackCard = ({ title, description, icon: Icon, children }: TechStackCardProps) => {

    const onceEffect = true

    return (
        <div className="space-y-6">
            <motion.p
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                viewport={{ once: onceEffect }}
                className="text-2xl lg:text-4xl flex gap-4 items-center"
            >
                <span className="font-medium bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent py-1">{title}</span>
                <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    viewport={{ once: onceEffect }}
                >
                    {<Icon className='text-foreground opacity-90 lg:mt-2' />}
                </motion.span>
            </motion.p>
            <motion.p
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                viewport={{ once: onceEffect }}
                className="max-w-xl text-sm text-muted-foreground"
            >
                {description}
            </motion.p>
            <div className="flex flex-wrap gap-4">{children}</div>
        </div>
    );
};

export default TechStackCard;