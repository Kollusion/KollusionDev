"use client"
import React, { useState } from 'react';
import { Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

const variants = ["default", "ghost", "secondary", "outline", "link", "destructive"] as const;
type Variants = (typeof variants)[number];

const page = () => {
    const [variant, setVariant] = useState<Variants>("default")

    const handleClick = () => {
        setVariant((prev) => {
            const currentIndex = variants.indexOf(prev);
            const nextIndex = (currentIndex + 1) % variants.length;
            return variants[nextIndex];
        });
    };
    return (
        <div className='flex justify-center items-center h-screen w-full'>
            <Button variant={variant} size={'xl'} onClick={handleClick}>
                <Settings /> test button
            </Button>
        </div>
    );
};

export default page;