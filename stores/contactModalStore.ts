import { create } from 'zustand';

type ModalType = 'payment' | 'terms' | 'refund';

interface ModalStore {
    openModal: ModalType | null;
    isOpen: (modal: ModalType) => boolean;
    open: (modal: ModalType) => void;
    close: () => void;
}

export const useModalStore = create<ModalStore>((set, get) => ({
    openModal: null,

    isOpen: (modal) => get().openModal === modal,

    open: (modal) => set({ openModal: modal }),

    close: () => set({ openModal: null }),
}));