import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { usePortfolioModalStore } from '@/stores/portfolioModalStore';
import { portfolioData, portfolioDataEn } from '@/data/portfolio';
import { SquareArrowUpRightIcon } from 'lucide-react';

import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

const PortfolioModal = () => {
    const locale = useLocale();
    const t = useTranslations('Portfolio');

    const { isOpen, workId, closePortfolioModal } = usePortfolioModalStore();

    const currentPortfolio = locale === 'en' ? portfolioDataEn : portfolioData;
    const project = workId ? currentPortfolio.find((p) => p.id === workId) : null;

    if (!project) return null;

    return (
        <Dialog open={isOpen} onOpenChange={closePortfolioModal}>
            <DialogContent className="lg:min-w-5xl xl:min-w-7xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
                    <DialogDescription className="sr-only">
                        {project.shortDescription}
                    </DialogDescription>
                </DialogHeader>

                <div className="grid gap-6 lg:grid-cols-2 mt-4">
                    <div className="relative aspect-video rounded-lg overflow-hidden border bg-muted">
                        {project.thumbnail ? (
                            <Image
                                src={project.thumbnail}
                                alt={project.title}
                                fill
                                className="object-cover"
                            />
                        ) : (
                            <div className="flex items-center justify-center h-full text-muted-foreground">
                                No preview
                            </div>
                        )}
                    </div>

                    <div className="space-y-4">
                        <p className="text-muted-foreground">{project.shortDescription}</p>

                        <div>
                            <h3 className="font-semibold mb-1">
                                {t('taskLabel')}
                            </h3>
                            <p>{project.problem}</p>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-1">
                                {t('solutionLabel')}
                            </h3>
                            <p>{project.solution}</p>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-2">
                                {t('features')}
                            </h3>
                            <ul className="list-disc list-inside space-y-1">
                                {project.features.map((feat, i) => (
                                    <li key={i}>{feat}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-2">
                                {t('stack')}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {project.liveUrl && (
                            <div className="pt-2">
                                <Link
                                    href={project.liveUrl.trim()}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button className='max-lg:w-full'>{locale === 'en' ? 'View Live' : 'Смотреть онлайн'}<SquareArrowUpRightIcon /></Button>

                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default PortfolioModal;