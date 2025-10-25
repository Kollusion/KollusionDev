'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { PenIcon, Code2Icon, GithubIcon, ArrowUpIcon } from 'lucide-react';
import { useScrollPosition } from 'react-haiku';
import { kollusion } from '@/data/user';

import { useLocale, useTranslations } from 'next-intl';

const Navbar = () => {
    const [active, setActive] = useState<boolean>(false)
    const [upArrow, setUpArrow] = useState<boolean>(false)

    const t = useTranslations('Navbar');
    const locale = useLocale();
    const otherLocale = locale === 'en' ? 'ru' : 'en';

    const [scroll, setScroll] = useScrollPosition() as [
        { x: number; y: number },
        (pos: { x?: number; y: number }) => void
    ];

    useEffect(() => {
        scroll.y > 70 ? setActive(true) : setActive(false)
        scroll.y > 300 ? setUpArrow(true) : setUpArrow(false)
    }, [scroll.y])

    const handleUp = () => {
        setScroll({ y: 0 })
    }

    return (
        <>
            <header className={`fixed w-full ${active ? 'lg:translate-y-4' : 'lg:translate-y-8'} z-40`}>
                <div className={`flex justify-between rounded-b-xl lg:rounded-2xl container duration-750 items-center mx-auto ${active ? 'bg-muted/30 backdrop-blur-lg px-4 py-1 max-w-6xl' : 'p-8 '}`}>
                    <h1 className={`font-bold select-none cursor-pointer active:cursor-grab duration-500 tracking-wide hover:tracking-wider active:tracking-widest ${active ? 'translate-y-4 text-sm lg:text-2xl' : 'text-sm lg:text-lg'}`}>
                        KOLLUSION
                        <span className={`font-mono text-sm lg:text-lg duration-500 ${active ? '' : 'opacity-0'}`}>.pro</span>
                        <br />
                        <span className={`font-mono flex items-center duration-500 gap-2 ${active ? 'opacity-0' : ''}`}>.pro <Code2Icon /></span>
                    </h1>
                    <div className='flex gap-2 lg:gap-4 items-center'>
                        <Link rel="canonical" href={`/${otherLocale}`}>
                            <Button variant={'ghost'}>{otherLocale.toUpperCase()}</Button>
                        </Link>
                        <Link href={kollusion.gitHubLink}>
                            <Button variant={'ghost'} className='max-lg:hidden'>Github <GithubIcon /></Button>
                        </Link>
                        <a href="#ContactSection">
                            <Button>{t('contactButton')} <PenIcon /></Button>
                        </a>
                    </div>
                </div>
            </header>

            <Button
                variant={'outline'}
                size={'icon-lg'}
                onClick={handleUp}
                className={`fixed bottom-8 right-8 duration-700 backdrop-blur-md hover:text-primary rounded-full z-40 ${upArrow ? '' : 'translate-x-[200%]'}`}
            >
                <ArrowUpIcon />
            </Button>
        </>
    );
};

export default Navbar;