import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Analytics } from '@vercel/analytics/react';
import Navbar from '@/components/navbar/navbar';

export const metadata: Metadata = {
    title: 'Henrique Barucco',
    description: 'Portfólio de Henrique Barucco - Desenvolvedor Fullstack',
    robots: {
        index: true,
        follow: true,
    }
};

export default function RootLayout({
    children,
}: {
  children: React.ReactNode
}) {
    return (
        <html lang="pt-BR">
            <body className="flex flex-col min-h-screen">
                <Navbar/>
                <main className="flex flex-grow">
                    {children}
                </main>
                <footer className="bg-base-100 text-white py-4 text-center text-sm">
                    <Link href={'https://github.com/henriquebarucco'} target='_blank'>
                        Desenvolvido por Henrique Barucco.
                    </Link>
                </footer>
                <Analytics />
            </body>
        </html>
    );
}
