"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import ContactModals from './Contact/modals/ContactModals';
import {
    CreditCard,
    FileText,
    ArrowLeftRight,
} from 'lucide-react';
import { ShineBorder } from "@/components/ui/shine-border"
import { kollusion } from '@/data/user';
import { Card, CardContent } from '../ui/card';
import { GridPattern } from "@/components/ui/grid-pattern"
import { useModalStore } from '@/stores/contactModalStore';

const ContactSection = () => {
    const { open: openModal } = useModalStore();
    const t = useTranslations('Contact');

    const handleTelegramClick = () => {
        window.open(kollusion.telegramUrl, '_blank', 'noopener,noreferrer');
    };

    const handlePaymentClick = () => openModal('payment');
    const handleTermsClick = () => openModal('terms');
    const handleRefundClick = () => openModal('refund');

    return (
        <>
            <section className="h-screen max-lg:px-4 relative">
                <GridPattern
                    className='top-0 left-0 absolute w-full h-full opacity-20 -z-10 [mask-image:linear-gradient(to_top,white,transparent)]'
                />
                <div className="h-20" id="ContactSection"></div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center text-center"
                >
                    <h2 className="font-light text-4xl lg:text-6xl mb-4">
                        {t('title')}
                    </h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl">
                        {t('subtitle')}
                    </p>
                </motion.div>

                <div className="flex justify-center h-[70vh] items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="w-full max-w-2xl"
                    >
                        <Card className='relative'>
                            <ShineBorder shineColor={["#58a9d3"]} />
                            <CardContent className='space-y-6'>
                                <Button
                                    onClick={handleTelegramClick}
                                    size="xl"
                                    className="w-full h-16 text-lg font-medium"
                                >
                                    {t('buttons.telegramButton')}
                                    <Image
                                        src={'https://cdn.svglogos.dev/logos/telegram.svg'}
                                        alt={'Telegram'}
                                        width={64}
                                        height={64}
                                        className="size-5"
                                        unoptimized
                                    />
                                </Button>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                                    <Button
                                        variant="outline"
                                        onClick={handlePaymentClick}
                                        className="flex flex-col items-center justify-center h-auto py-4 px-2 text-sm"
                                    >
                                        <CreditCard className="h-8 w-8 mb-2 text-muted-foreground" />
                                        {t('buttons.payment')}
                                    </Button>

                                    <Button
                                        variant="outline"
                                        onClick={handleTermsClick}
                                        className="flex flex-col items-center justify-center h-auto py-4 px-2 text-sm"
                                    >
                                        <FileText className="h-8 w-8 mb-2 text-muted-foreground" />
                                        {t('buttons.terms')}
                                    </Button>

                                    <Button
                                        variant="outline"
                                        onClick={handleRefundClick}
                                        className="flex flex-col items-center justify-center h-auto py-4 px-2 text-sm"
                                    >
                                        <ArrowLeftRight className="h-8 w-8 mb-2 text-muted-foreground" />
                                        {t('buttons.refund')}
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
                <div className='w-full h-6 text-center'>
                    <p className='font-light opacity-50 font-mono'>{t('bottomText')} <br className='lg:hidden' /><span className='text-xs'>{t('bottomText2')}</span></p>
                </div>
            </section>
            <ContactModals />
        </>
    );
};

export default ContactSection;