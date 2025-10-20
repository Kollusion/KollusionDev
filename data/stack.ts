import { StackCategory } from "@/app/types";
import { AppWindowIcon, MonitorSmartphoneIcon, FolderTreeIcon, ServerIcon } from 'lucide-react';

export const stackData: StackCategory[] = [
    {
        id: 'frontend',
        icon: AppWindowIcon,
        technologies: [
            { name: 'HTML', icon: 'https://cdn.svglogos.dev/logos/html-5.svg', color: 'orange', href: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
            { name: 'CSS', icon: 'https://cdn.svglogos.dev/logos/css-3.svg', color: 'blue', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
            { name: 'TypeScript', icon: 'https://cdn.svglogos.dev/logos/typescript-icon.svg', color: 'sky', href: 'https://www.typescriptlang.org/' },
            { name: 'React', icon: 'https://cdn.svglogos.dev/logos/react.svg', color: 'emerald', href: 'https://react.dev/' },
            { name: 'Tailwind CSS', icon: 'https://cdn.svglogos.dev/logos/tailwindcss-icon.svg', color: 'cyan', href: 'https://tailwindcss.com/' },
            { name: 'Zustand', icon: 'https://zustand-demo.pmnd.rs/favicon.ico', color: 'amber', href: 'https://zustand-demo.pmnd.rs/' },
            { name: 'Next.js', icon: 'https://cdn.svglogos.dev/logos/nextjs-icon.svg', color: 'gray', href: 'https://nextjs.org/' },
            { name: 'Astro', icon: 'https://cdn.svglogos.dev/logos/astro-icon.svg', color: 'purple', href: 'https://astro.build/' },
        ],
    },
    {
        id: 'backend',
        icon: ServerIcon,
        technologies: [
            { name: 'Node.js', icon: 'https://cdn.svglogos.dev/logos/nodejs-icon.svg', color: 'emerald', href: 'https://nodejs.org/' },
            { name: 'Bun', icon: 'https://cdn.svglogos.dev/logos/bun.svg', color: 'amber', href: 'https://bun.sh/' },
            { name: 'Hono', icon: 'https://cdn.svglogos.dev/logos/hono.svg', color: 'rose', href: 'https://hono.dev/' },
            { name: 'Flask', icon: 'https://cdn.svglogos.dev/logos/flask.svg', color: 'indigo', href: 'https://flask.palletsprojects.com/' },
            { name: 'PostgreSQL', icon: 'https://cdn.svglogos.dev/logos/postgresql.svg', color: 'blue', href: 'https://www.postgresql.org/' },
            { name: 'MongoDB', icon: 'https://cdn.svglogos.dev/logos/mongodb-icon.svg', color: 'green', href: 'https://mongodb.com/' },
            { name: 'Redis', icon: 'https://cdn.svglogos.dev/logos/redis.svg', color: 'fuchsia', href: 'https://redis.io/' },
            { name: 'tRPC', icon: 'https://cdn.svglogos.dev/logos/trpc.svg', color: 'lime', href: 'https://trpc.io/' },
            { name: 'TypeScript', icon: 'https://cdn.svglogos.dev/logos/typescript-icon.svg', color: 'sky', href: 'https://www.typescriptlang.org/' },
        ],
    },
    {
        id: 'devops',
        icon: FolderTreeIcon,
        technologies: [
            { name: 'Vercel', icon: 'https://cdn.svglogos.dev/logos/vercel-icon.svg', color: 'violet', href: 'https://vercel.com/' },
            { name: 'Netlify', icon: 'https://cdn.svglogos.dev/logos/netlify-icon.svg', color: 'purple', href: 'https://www.netlify.com/' },
            { name: 'GitHub', icon: 'https://cdn.svglogos.dev/logos/github-icon.svg', color: 'orange', href: 'https://github.com/' },
            { name: 'Docker', icon: 'https://cdn.svglogos.dev/logos/docker-icon.svg', color: 'blue', href: 'https://www.docker.com/' },
            { name: 'Linux', icon: 'https://cdn.svglogos.dev/logos/linux-tux.svg', color: 'gray', href: 'https://www.linux.org/' },
            { name: 'Bash', icon: 'https://cdn.svglogos.dev/logos/bash-icon.svg', color: 'green', href: 'https://www.gnu.org/software/bash/' },
        ],
    },
    {
        id: 'apps',
        icon: MonitorSmartphoneIcon,
        technologies: [
            { name: 'Python', icon: 'https://cdn.svglogos.dev/logos/python.svg', color: 'yellow', href: 'https://python.org/' },
            { name: 'JavaScript', icon: 'https://cdn.svglogos.dev/logos/javascript.svg', color: 'gray', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
            { name: 'TypeScript', icon: 'https://cdn.svglogos.dev/logos/typescript-icon.svg', color: 'sky', href: 'https://www.typescriptlang.org/' },
            { name: 'Grammy', icon: 'https://grammy.dev/images/Y.svg', color: 'blue', href: 'https://grammy.dev/' },
            { name: 'Tauri', icon: 'https://cdn.svglogos.dev/logos/tauri.svg', color: 'teal', href: 'https://tauri.app/' },
            { name: 'Electron', icon: 'https://cdn.svglogos.dev/logos/electron.svg', color: 'purple', href: 'https://electronjs.org/' },
        ],
    },
];