import React from 'react';
import { Button } from '../ui/button';
import { HeroCardSection } from '../ui/heroCardButton';
import { MouseIcon, PenIcon } from 'lucide-react';

import { useTranslations } from 'next-intl';

import { GridPattern } from "@/components/ui/grid-pattern"

const HeroSection = () => {
    const t = useTranslations('Hero');
    return (
        <>
            <section className='lg:h-screen w-full container mx-auto lg:py-8'>
                <GridPattern
                    className='top-0 left-0 absolute w-full h-full opacity-20 -z-10 [mask-image:linear-gradient(to_bottom,white,transparent)]'
                />
                <div className='w-full h-full bg-gradient-to-tl from-background to-accent rounded-b-xl lg:rounded-xl flex flex-col justify-between overflow-clip'>
                    <div className='flex-1 max-lg:min-h-screen flex justify-center items-center text-center relative'>
                        <div className='flex flex-col gap-8 justify-center items-center mt-16 max-lg:px-4'>
                            <div className='w-full'>
                                <h1 className='text-2xl lg:text-7xl font-medium'>{t('titleLine1')}</h1>
                                <h1 className='text-2xl lg:text-7xl font-medium'>{t('titleLine2')} <span className='bg-gradient-to-br from-primary to-sidebar-ring bg-clip-text text-transparent font-bold drop-shadow-md drop-shadow-primary'>{t('highlight')}!</span></h1>
                            </div>
                            <p className='text-xs lg:text-lg text-muted-foreground w-2xl'>{t('descriptionLine1')} <br /> {t('descriptionLine2')}</p>
                            <a href="#ContactSection">
                                <Button size={'xl'}>{t('contactButton')} <PenIcon /></Button>
                            </a>
                            <MouseIcon className='mx-auto size-8 text-muted animate-pulse lg:hidden' />
                        </div>
                    </div>
                    <HeroCardSection />
                </div>
            </section>
        </>

    );
};

export default HeroSection;