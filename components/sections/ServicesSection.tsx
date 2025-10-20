'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircleIcon, PenLineIcon, } from 'lucide-react';
import { Button } from '../ui/button';
import { ServicesTabs } from '@/app/types'
import { tabs, tabsEn } from '@/data/services';
import { useLocale, useTranslations } from 'next-intl';
import { kollusion } from '@/data/user';

const ServicesSection = () => {
    const locale = useLocale();
    const t = useTranslations('Services');

    const [activeTab, setActiveTab] = useState<ServicesTabs['id']>('websites');

    const currentTabs = useMemo(() => {
        return locale === 'en' ? tabsEn : tabs;
    }, [locale]);

    const currentTab = currentTabs.find(tab => tab.id === activeTab)!;

    const getTelegramLink = (text: string) => {
        return `${kollusion.telegramUrl}?text=${encodeURIComponent(text)}`;
    };

    return (
        <section className="container mx-auto max-lg:px-4" id="services">
            <div className='h-20' id='ServicesSection'></div>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="font-light text-4xl lg:text-6xl">
                    {t('title')}
                </h2>
                <p className="mt-4 text-muted-foreground max-w-2xl">
                    {t('subtitle')}
                </p>
            </motion.div>

            <div className="inline-flex max-lg:flex-wrap justify-center p-1 bg-muted/30 rounded-xl backdrop-blur-sm border mt-12">
                {currentTabs.map((tab) => {

                    const IconComponent = tab.Icon;

                    return (
                        <Button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            variant={'ghost'}
                            size={'xl'}
                            className={`
                                flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all
                                ${activeTab === tab.id ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}
                            `}
                        >
                            <IconComponent size={5} />
                            {tab.label}
                        </Button>
                    )
                })}
            </div>

            <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-8"
            >
                {currentTab.services.map((service) => (
                    <Card
                        key={service.id}
                        className="border bg-card/50 backdrop-blur-sm duration-500 h-full"
                    >
                        <CardHeader>
                            <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                            <p className="text-muted-foreground text-sm mt-1">{service.description}</p>
                            <div className="mt-3 flex flex-wrap gap-1">
                                {service.tech.map((tech, i) => (
                                    <Badge key={i} variant="secondary" className="text-xs px-2 py-0.5">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </CardHeader>
                        <CardContent className='flex flex-col gap-4 justify-between h-full'>
                            <ul className="text-sm text-muted-foreground space-y-1">
                                {service.includes.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-1.5">
                                        <CheckCircleIcon className="w-3.5 h-3.5 mt-0.5 text-primary flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className='flex items-center justify-between'>
                                <p className="font-medium text-lg">{service.price}</p>
                                <Link href={getTelegramLink(service.telegramText)}>
                                    <Button size={'sm'} variant={'outline'}>{t('buttons.discuss')} <PenLineIcon /></Button>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </motion.div>
        </section>
    );
};

export default ServicesSection;