import { create } from 'zustand';

interface ProfileModalState {
    isOpen: boolean;
    workId: string | null;
    openPortfolioModal: (id: string) => void;
    closePortfolioModal: () => void;
}

export const usePortfolioModalStore = create<ProfileModalState>((set) => ({
    isOpen: false,
    workId: null,
    openPortfolioModal: (id: string) => set({ isOpen: true, workId: id }),
    closePortfolioModal: () => set({ isOpen: false, workId: null }),
}));