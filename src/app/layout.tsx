import './globals.css';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';

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
        <html lang="pt-BR" className='w-full'>
            <body className="flex flex-col min-h-screen w-full">
                <Navbar/>
                <main className="flex flex-grow w-full">
                    {children}
                </main>
                <Footer/>
                <Analytics />
            </body>
        </html>
    );
}
