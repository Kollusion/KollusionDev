'use client'
import React from 'react';
import TechStackCard from './Stack/TechStackCard';
import TechButton from './Stack/TechButton';
import { stackData } from '@/data/stack';
import { motion } from 'motion/react'

import { useTranslations } from 'next-intl';

const StackSection = () => {

    const t = useTranslations('Stack');

    const localizedStack = stackData.map((item) => ({
        ...item,
        title: t(`${item.id}.title`),
        description: t(`${item.id}.description`),
    }));

    const onceEffect = true
    //вайбкодеры повторите
    return (
        <section className="container mx-auto max-lg:px-4">
            <div className='h-20' id='StackSection'></div>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: onceEffect }}
                transition={{ duration: 0.6 }}
                className='flex flex-col items-start gap-4 w-full'
            >
                <h2 className="font-light text-4xl lg:text-6xl">
                    {t('title')}
                </h2>
                <p className="text-muted-foreground max-w-2xl">
                    {t('subtitle')}
                </p>
            </motion.div>
            <div className="mt-12 grid lg:grid-cols-2 gap-x-8 gap-y-16">
                {localizedStack.map((category) => {

                    return (
                        <TechStackCard
                            key={category.id}
                            title={category.title}
                            description={category.description}
                            icon={category.icon}
                        >
                            {category.technologies.map((tech) => (
                                <TechButton
                                    key={tech.name}
                                    name={tech.name}
                                    icon={tech.icon}
                                    color={tech.color}
                                    href={tech.href}
                                />
                            ))}
                        </TechStackCard>
                    );
                })}
            </div>
        </section>
    );
};

export default StackSection;