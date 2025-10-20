'use client'

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

type Color = keyof typeof colorClasses;

interface TechButtonProps {
    name: string;
    icon: string;
    className?: string;
    color: Color
    href?: string;
}

const colorClasses = {
    orange: 'bg-orange-400/20 text-orange-400/80',
    blue: 'bg-blue-400/20 text-blue-400/80',
    emerald: 'bg-emerald-400/20 text-emerald-400/80',
    violet: 'bg-violet-400/20 text-violet-400/80',
    rose: 'bg-rose-400/20 text-rose-400/80',
    sky: 'bg-sky-400/20 text-sky-400/80',
    amber: 'bg-amber-400/20 text-amber-400/80',
    purple: 'bg-purple-400/20 text-purple-400/80',
    fuchsia: 'bg-fuchsia-400/20 text-fuchsia-400/80',
    lime: 'bg-lime-400/20 text-lime-400/80',
    cyan: 'bg-cyan-400/20 text-cyan-400/80',
    teal: 'bg-teal-400/20 text-teal-400/80',
    yellow: 'bg-yellow-400/20 text-yellow-400/80',
    indigo: 'bg-indigo-400/20 text-indigo-400/80',
    pink: 'bg-pink-400/20 text-pink-400/80',
    green: 'bg-green-400/20 text-green-400/80',
    gray: 'bg-gray-400/20 text-gray-400/80',
};

const TechButton = ({ name, icon, color, href, className = '', ...props }: TechButtonProps) => {
    const classes = `${colorClasses[color]} group items-center gap-2 ${className}`;

    const buttonContent = (
        <Button
            variant="custom"
            size="lg"
            className={classes}
            {...props}
        >
            <Image
                src={icon}
                alt={name}
                width={64}
                height={64}
                className="size-5"
                unoptimized
            />
            {name}
        </Button>
    );

    if (href) {
        return (
            <Link href={href} target="_blank" rel="noopener noreferrer">
                {buttonContent}
            </Link>
        );
    }

    return buttonContent;
};

export default TechButton;