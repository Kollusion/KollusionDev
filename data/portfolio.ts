import { PortfolioItem } from '@/app/types'

export const portfolioData: PortfolioItem[] = [
    {
        id: 'sofia-couch',
        title: 'Sofia’s Couch',
        slug: 'sofia-couch',
        shortDescription: 'Лендинг для салона красоты с онлайн-записью и SEO',
        problem: 'Клиенты не могли записаться без звонков и переписок.',
        solution: 'Создал адаптивный сайт с формой записи, интеграцией с MongoDB и SEO-оптимизацией.',
        features: [
            'Онлайн-запись в 1 клик',
            'Полная адаптивность',
            'SEO-оптимизация',
            'Анимации и микро-интеракции'
        ],
        techStack: ['Next.js', 'TypeScript', 'MongoDB', 'Tailwind CSS', 'Zustand'],
        thumbnail: '/images/portfolio/sofia-couch.png',
        liveUrl: 'https://sofiascouch.ru',
        githubUrl: null,
        isFeatured: true,
        createdAt: '2024-09-10',
        category: 'landing'
    },
    {
        id: 'northenland-donate',
        title: 'NorthenLand — Донат-система',
        slug: 'northenland-donate',
        shortDescription: 'Платёжная система для Minecraft-сервера с интеграцией в игру',
        problem: 'Нужно было автоматизировать донаты и начислять реферальные бонусы.',
        solution: 'Реализовал платёжные шлюзы (ЮKassa, FreeKassa), вебхуки, валидацию и прямую интеграцию с сервером Minecraft.',
        features: [
            'Платежи через 4 агрегатора',
            'Реферальная система',
            'Выплата на карту',
            'Интеграция с Minecraft'
        ],
        techStack: ['Astro', 'TypeScript', 'Node.js', 'MongoDB', 'Payment APIs', 'Webhooks'],
        thumbnail: '/images/portfolio/northenland.png',
        liveUrl: 'https://northenland.vercel.app',
        githubUrl: null,
        isFeatured: true,
        createdAt: '2024-08-20',
        category: 'fullstack'
    },
    {
        id: 'northenland-partners',
        title: 'NorthenLand — Партнёрская площадка',
        slug: 'northenland-partners',
        shortDescription: 'Полноценная реферальная платформа с выплатами и статистикой',
        problem: 'Партнёры не видели, сколько они заработали и кого привели.',
        solution: 'Создал систему с промокодами, счётчиками, выводом средств и интеграцией в игру.',
        features: [
            'Создание промокодов',
            'Статистика по привлечённым',
            'Вывод на карту',
            'События внутри Minecraft'
        ],
        techStack: ['Astro', 'TypeScript', 'MongoDB', 'Payment APIs', 'Webhooks'],
        thumbnail: '/images/portfolio/northenland-partners.jpg',
        liveUrl: 'https://northenland.vercel.app/partners',
        githubUrl: null,
        isFeatured: false,
        createdAt: '2024-08-25',
        category: 'fullstack'
    },
    {
        id: 'blazor-executor',
        title: 'Blazor Executor',
        slug: 'blazor-executor',
        shortDescription: 'UI для инжектора скриптов в Roblox с темами и безопасностью',
        problem: 'Нужен был простой, красивый и безопасный интерфейс для геймеров.',
        solution: 'Сделал 6 тем, систему обновлений, проверку через VirusTotal и минималистичный UX.',
        features: [
            '6 визуальных тем',
            'Поддержка Lua',
            'Проверка безопасности',
            'Автообновления'
        ],
        techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Shadcn/ui'],
        thumbnail: '/images/portfolio/blazor-executor.png',
        liveUrl: 'https://blazor.lol',
        githubUrl: null,
        isFeatured: true,
        createdAt: '2024-07-12',
        category: 'gaming'
    },
    {
        id: 'zyphera-wallet',
        title: 'Zyphera — Web3 кошелёк',
        slug: 'zyphera-wallet',
        shortDescription: 'Лендинг и MVP интерфейса кошелька для новичков в Web3',
        problem: 'Web3 кажется сложным даже для взрослых.',
        solution: 'Создал простой, понятный интерфейс с фразой “даже бабушка поймёт”.',
        features: [
            'Интуитивный UI',
            'Баланс и операции',
            'Адаптив под мобильные',
            'Космическая тема'
        ],
        techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        thumbnail: '/images/portfolio/zyphera.png',
        liveUrl: 'https://landing-zyphera.vercel.app',
        githubUrl: null,
        isFeatured: true,
        createdAt: '2024-06-30',
        category: 'web3'
    }
];

export const portfolioDataEn: PortfolioItem[] = [
    {
        id: 'sofia-couch',
        title: 'Sofia’s Couch',
        slug: 'sofia-couch',
        shortDescription: 'Landing page for a beauty salon with online booking and SEO',
        problem: 'Clients couldn’t book appointments without phone calls or messaging.',
        solution: 'Built a responsive website with a booking form, MongoDB integration, and SEO optimization.',
        features: [
            'One-click online booking',
            'Fully responsive design',
            'SEO optimization',
            'Animations and micro-interactions'
        ],
        techStack: ['Next.js', 'TypeScript', 'MongoDB', 'Tailwind CSS', 'Zustand'],
        thumbnail: '/images/portfolio/sofia-couch.png',
        liveUrl: 'https://sofiascouch.ru',
        githubUrl: null,
        isFeatured: true,
        createdAt: '2024-09-10',
        category: 'landing'
    },
    {
        id: 'northenland-donate',
        title: 'NorthenLand — Donation System',
        slug: 'northenland-donate',
        shortDescription: 'Payment system for a Minecraft server with in-game integration',
        problem: 'Needed to automate donations and implement a referral bonus system.',
        solution: 'Implemented payment gateways (YooKassa, FreeKassa), webhooks, validation, and direct integration with the Minecraft server.',
        features: [
            'Payments via 4 payment aggregators',
            'Referral program',
            'Payouts to bank cards',
            'Minecraft integration'
        ],
        techStack: ['Astro', 'TypeScript', 'Node.js', 'MongoDB', 'Payment APIs', 'Webhooks'],
        thumbnail: '/images/portfolio/northenland.png',
        liveUrl: 'https://northenland.vercel.app',
        githubUrl: null,
        isFeatured: true,
        createdAt: '2024-08-20',
        category: 'fullstack'
    },
    {
        id: 'northenland-partners',
        title: 'NorthenLand — Partner Platform',
        slug: 'northenland-partners',
        shortDescription: 'Full-featured referral platform with payouts and analytics',
        problem: 'Partners couldn’t see how much they’d earned or how many users they’d referred.',
        solution: 'Built a system with promo codes, referral tracking, withdrawal functionality, and in-game event integration.',
        features: [
            'Promo code generation',
            'Referral statistics',
            'Bank card payouts',
            'In-game Minecraft events'
        ],
        techStack: ['Astro', 'TypeScript', 'MongoDB', 'Payment APIs', 'Webhooks'],
        thumbnail: '/images/portfolio/northenland-partners.jpg',
        liveUrl: 'https://northenland.vercel.app/partners',
        githubUrl: null,
        isFeatured: false,
        createdAt: '2024-08-25',
        category: 'fullstack'
    },
    {
        id: 'blazor-executor',
        title: 'Blazor Executor',
        slug: 'blazor-executor',
        shortDescription: 'UI for a Roblox script injector with themes and security features',
        problem: 'Gamers needed a simple, beautiful, and secure interface.',
        solution: 'Implemented 6 visual themes, an auto-update system, VirusTotal security checks, and a minimalist UX.',
        features: [
            '6 visual themes',
            'Lua support',
            'Security verification',
            'Auto-updates'
        ],
        techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Shadcn/ui'],
        thumbnail: '/images/portfolio/blazor-executor.png',
        liveUrl: 'https://blazor.lol',
        githubUrl: null,
        isFeatured: true,
        createdAt: '2024-07-12',
        category: 'gaming'
    },
    {
        id: 'zyphera-wallet',
        title: 'Zyphera — Web3 Wallet',
        slug: 'zyphera-wallet',
        shortDescription: 'Landing page and MVP wallet interface designed for Web3 beginners',
        problem: 'Web3 feels overwhelming—even for adults.',
        solution: 'Created a simple, intuitive interface with the tagline “even your grandma would get it.”',
        features: [
            'Intuitive UI',
            'Balance and transaction history',
            'Mobile-responsive design',
            'Space-themed visuals'
        ],
        techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        thumbnail: '/images/portfolio/zyphera.png',
        liveUrl: 'https://wallet.zyphera.vercel.app',
        githubUrl: null,
        isFeatured: true,
        createdAt: '2024-06-30',
        category: 'web3'
    }
];