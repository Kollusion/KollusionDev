import type { Metadata } from "next";

import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';

import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from '../../components/props/Navbar';
import Loader from "@/components/props/Loader";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});


export const metadata: Metadata = {
    title: {
        default: "Kollusion — Fullstack Developer",
        template: "%s | Kollusion",
    },
    description:
        "I build fast, responsive, and animated websites with Next.js, TypeScript, and modern UI. Portfolio of real projects with backend, payments, and SEO.",
    keywords: [
        "fullstack developer",
        "frontend developer",
        "next.js developer",
        "react developer",
        "web developer portfolio",
        "custom website",
        "landing page",
        "Minecraft server website",
        "UI/UX developer Russia",
        "freelance developer",
        "адаптивный сайт",
        "разработка сайтов",
        "фуллстек разработчик",
        "фронтенд разработчик",
        "лендинг под заказ",
    ],
    authors: [{ name: "Kollusion", url: "https://kollusion.vercel.app" }],
    creator: "Kollusion",
    publisher: "Kollusion",

    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://kollusion.vercel.app",
        title: "Kollusion — Fullstack Developer",
        description:
            "Portfolio of modern web apps built with Next.js, TypeScript, and Tailwind CSS. Fast, SEO-friendly, with animations and backend.",
        siteName: "Kollusion.dev",
        images: [
            {
                url: "https://kollusion.vercel.app/og-image.png",
                width: 1200,
                height: 630,
                alt: "Kollusion — Portfolio of a fullstack developer",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Kollusion — Fullstack Developer",
        description:
            "Portfolio of modern web apps built with Next.js, TypeScript, and Tailwind CSS.",
        images: ["https://kollusion.vercel.app/og-image.png"],
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    alternates: {
        canonical: "https://kollusion.vercel.app",
        languages: {
            "en-US": "https://kollusion.vercel.app/en",
            "ru-RU": "https://kollusion.vercel.app/ru",
        },
    },

    icons: {
        icon: "/favicon.ico",
    },
};



export default async function RootLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {

    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) notFound();

    return (
        <html lang={locale}>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
            >
                <NextIntlClientProvider>
                    <Loader></Loader>
                    <Navbar></Navbar>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
