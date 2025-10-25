// components/sections/Contact/modals/ContactModals.tsx
import { useModalStore } from '@/stores/contactModalStore';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { useTranslations } from 'next-intl';

const PaymentModal = () => {
    const t = useTranslations('Contact.modals.payment');
    return (
        <DialogContent className="max-w-2xl">
            <DialogHeader>
                <DialogTitle>{t('title')}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 text-sm text-muted-foreground">
                <div>
                    <h3 className="font-semibold text-foreground">🇷🇺 {t('russia_title')}</h3>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                        <li>Банковский перевод</li>
                        <li>ЮKassa</li>
                        <li>tome.ge</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-foreground">🌍 {t('international_title')}</h3>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                        <li>tome.ge</li>
                        <li>₿ Crypto (USDT, TON)</li>
                    </ul>
                </div>

                <p className="mt-3 italic">{t('processing_time')}</p>
            </div>
        </DialogContent>
    );
};

const TermsModal = () => {
    const t = useTranslations('Contact.modals.terms');
    return (
        <DialogContent className="max-w-2xl">
            <DialogHeader>
                <DialogTitle>{t('title')}</DialogTitle>
            </DialogHeader>
            <div className="space-y-5 text-sm text-muted-foreground">
                <div>
                    <h3 className="font-semibold text-foreground flex items-center gap-2">
                        💰 {t('prepayment')}
                    </h3>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>{t('prepayment_standard')}</li>
                        <li>{t('prepayment_small')}</li>
                        <li>{t('prepayment_locks')}</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-foreground flex items-center gap-2">
                        ⏱ {t('stages')}
                    </h3>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>{t('stages_large')}</li>
                        <li>{t('stages_after')}</li>
                        <li>{t('stages_transparent')}</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-foreground flex items-center gap-2">
                        📅 {t('timing')}
                    </h3>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>{t('invoice_valid')}</li>
                        <li>{t('work_starts')}</li>
                        <li>{t('deferral')}</li>
                    </ul>
                </div>
            </div>
        </DialogContent>
    );
};

const RefundModal = () => {
    const t = useTranslations('Contact.modals.refund');
    return (
        <DialogContent className="max-w-2xl">
            <DialogHeader>
                <DialogTitle>{t('title')}</DialogTitle>
            </DialogHeader>
            <div className="space-y-5 text-sm text-muted-foreground">
                <div>
                    <h3 className="font-semibold text-foreground flex items-center gap-2">
                        ✅ {t('full_refund')}
                    </h3>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>{t('full_refund_not_started')}</li>
                        <li>{t('full_refund_mutual')}</li>
                        <li>{t('full_refund_force_majeure')}</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-foreground flex items-center gap-2">
                        ✅ {t('partial_refund')}
                    </h3>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>{t('partial_refund_proportional')}</li>
                        <li>{t('partial_refund_early_stop')}</li>
                        <li>{t('partial_refund_my_fault')}</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-foreground flex items-center gap-2">
                        ❌ {t('no_refund')}
                    </h3>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>{t('no_refund_after_start')}</li>
                        <li>{t('no_refund_delivered')}</li>
                        <li>{t('no_refund_your_violation')}</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-foreground">{t('process')}</h3>
                    <ol className="list-decimal pl-5 mt-2 space-y-1">
                        <li>{t('step1')}</li>
                        <li>{t('step2')}</li>
                        <li>{t('step3')}</li>
                        <li>{t('step4')}</li>
                    </ol>
                </div>
            </div>
        </DialogContent>
    );
};

const ContactModals = () => {
    const { close, isOpen } = useModalStore();

    return (
        <>
            <Dialog open={isOpen('payment')} onOpenChange={close}>
                <PaymentModal />
            </Dialog>

            <Dialog open={isOpen('terms')} onOpenChange={close}>
                <TermsModal />
            </Dialog>

            <Dialog open={isOpen('refund')} onOpenChange={close}>
                <RefundModal />
            </Dialog>
        </>
    );
};

export default ContactModals;