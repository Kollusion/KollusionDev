"use client"
import React, { useMemo } from 'react';
import Link from 'next/link';
import { InfoIcon, HandIcon, GithubIcon } from 'lucide-react';
import ScreenCard from './Portfolio/ScreenCard';
import { Button } from '../ui/button';
import { motion } from 'motion/react';
import PortfolioModal from './Portfolio/modals/PortfolioModal';
import { usePortfolioModalStore } from '@/stores/portfolioModalStore';

import { portfolioData, portfolioDataEn } from '@/data/portfolio';
import { kollusion } from '@/data/user';

import { useTranslations, useLocale } from 'next-intl';

const PortfolioSection = () => {

    const { openPortfolioModal } = usePortfolioModalStore();

    const locale = useLocale();
    const t = useTranslations('Portfolio');

    const onceEffect = true

    const currentPortfolioData = useMemo(() => {
        return locale === 'en' ? portfolioDataEn : portfolioData;
    }, [locale]);

    const handleGoToTelegram = (title: string) => {
        const messages = [
            `Привет! Хочу такой же сайт, как ваш ${title}. Готов обсудить детали и сроки.`,
            `Видел ваш сайт ${title} — он отлично выглядит. Хочу такой же для своего проекта.`,
            `Хочу сайт как ${title}. Сколько стоит и когда можно начать?`,
            `Крутой сайт у ${title}! Хочу такой же для своего проекта. Берёшь заказы сейчас?`
        ];

        const randomMessage = encodeURIComponent(messages[Math.floor(Math.random() * messages.length)]);

        const telegramLink = `${kollusion.telegramUrl}?text=${randomMessage}`;

        return telegramLink;
    }

    return (
        <>
            <section className='container mx-auto max-lg:px-4'>
                <div className='h-20' id='PortfolioSection'></div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: onceEffect }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="font-light text-4xl lg:text-6xl">
                        {t('title')}
                    </h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl">
                        {t('subtitle')}
                    </p>
                </motion.div>
                <div className='space-y-16 lg:space-y-8 mt-12'>
                    {currentPortfolioData
                        .filter(item => item.isFeatured)
                        .map((item, index) => (
                            <div key={item.id} className={`flex max-lg:flex-col-reverse ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} gap-4 lg:gap-16 items-center  overflow-clip mt-4`}>
                                <div className='flex-1 space-y-8'>
                                    <div className='space-y-4'>
                                        <motion.p
                                            initial={{ opacity: 0, x: 10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5, ease: "easeInOut" }}
                                            viewport={{ once: onceEffect }}
                                            className='text-4xl font-bold'
                                        >
                                            «{item.title}»
                                        </motion.p>

                                        <motion.p
                                            initial={{ opacity: 0, x: 10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.7, ease: "easeInOut" }}
                                            viewport={{ once: onceEffect }}
                                            className='text-sm text-muted-foreground'
                                        >
                                            {item.shortDescription}
                                        </motion.p>
                                    </div>
                                    <div className='space-y-4'>
                                        <motion.p
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, ease: "easeInOut" }}
                                            viewport={{ once: onceEffect }}
                                        >
                                            <b>{t('taskLabel')}</b> {item.problem}
                                        </motion.p>

                                        <motion.p
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.7, ease: "easeInOut" }}
                                            viewport={{ once: onceEffect }}
                                        >
                                            <b>{t('solutionLabel')}</b> {item.solution}
                                        </motion.p>
                                    </div>
                                    <div className='flex justify-between gap-6'>
                                        <div className='flex gap-4'>
                                            <Button size={'xl'} onClick={() => openPortfolioModal(item.id)}>{t('buttons.details')} <InfoIcon /></Button>
                                            <Link href={kollusion.telegramUrl + "?text=" + "Привет! Хочу такой же сайт, как ваш " + item.title + ". Готов обсудить детали и сроки."}>
                                                <Button size={'xl'} variant={'secondary'}>{t('buttons.sameForMe')} <HandIcon /></Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <motion.div
                                    initial={index % 2 === 1 ? { opacity: 0, x: -10, scale: 0.99 } : { opacity: 0, x: 10, scale: 0.99 }}
                                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    viewport={{ once: onceEffect }}
                                    className='flex-1 flex items-center'
                                >
                                    <ScreenCard src={item.thumbnail} className={`${index % 2 === 1 ? 'lg:hover:translate-x-1 lg:active:translate-x-2' : 'lg:hover:-translate-x-1 lg:active:-translate-x-2'}`} />
                                </motion.div>
                            </div>
                        ))}
                </div>
                <div className='w-full mt-8 flex justify-center'>
                    <Link href={kollusion.gitHubLink}>
                        <Button className='max-lg:w-full lg:min-w-lg' size={'lg'} variant={'outline'}>{t('buttons.viewMore')} <GithubIcon /></Button>
                    </Link>
                </div>
            </section>
            <PortfolioModal></PortfolioModal>
        </>
    );
};

export default PortfolioSection;