import { LucideIcon } from "lucide-react";

export type Tech =
    | 'Next.js'
    | 'Astro'
    | 'TypeScript'
    | 'MongoDB'
    | 'Tailwind CSS'
    | 'Shadcn/ui'
    | 'DaisyUI'
    | 'Zustand'
    | 'Node.js'
    | 'Express'
    | 'Webhooks'
    | 'Payment APIs'
    | 'Reverse Engineering'
    | 'Three.js'
    | 'Framer Motion';

export type TechColor =
    | 'orange'
    | 'blue'
    | 'emerald'
    | 'violet'
    | 'rose'
    | 'sky'
    | 'amber'
    | 'purple'
    | 'fuchsia'
    | 'lime'
    | 'cyan'
    | 'teal'
    | 'yellow'
    | 'indigo'
    | 'pink'
    | 'green'
    | 'gray';

export interface TechItem {
    name: string;
    icon: string;
    color: TechColor;
    href: string;
}

export interface StackCategory {
    id: string;
    icon: LucideIcon;
    technologies: TechItem[];
}

type Service = {
    id: string;
    title: string;
    description: string;
    price: string;
    tech: string[];
    includes: string[];
    telegramText: string;
};

export interface PortfolioItem {
    id: string;
    title: string;
    slug: string;
    shortDescription: string;
    problem: string;
    solution: string;
    features: string[];
    techStack: Tech[];
    thumbnail: string;
    liveUrl?: string;
    githubUrl?: string | null;
    isFeatured: boolean;
    createdAt: string;
    category: 'landing' | 'fullstack' | 'automation' | 'web3' | 'gaming';
}

export type ServicesTabs = {
    id: 'websites' | 'bots' | 'other';
    label: string;
    Icon: LucideIcon;
    services: Service[];
};