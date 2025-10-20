import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import './globals.css'

export default function NotFound() {
    const t = useTranslations('NotFound');
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-background p-6 text-center dark">
            <div className="space-y-4">
                <h1 className="text-6xl font-bold text-primary">404</h1>
                <h2 className="text-2xl font-semibold text-foreground">{t('title')}</h2>
                <p className="text-muted-foreground">
                    {t('description')}
                </p>
                <div className="pt-4">
                    <Button asChild>
                        <a href="/">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            {t('backHome')}
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    );
}