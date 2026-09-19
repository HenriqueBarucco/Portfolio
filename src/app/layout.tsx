import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'
import { Providers } from '@/redux/provider'

export const metadata: Metadata = {
  title: 'Henrique Barucco — Desenvolvedor Backend Sênior',
  description:
    'Portfólio de Henrique Barucco, Desenvolvedor Backend Sênior especializado em sistemas distribuídos, integrações e plataformas confiáveis.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth">
      <body className="flex flex-col min-h-screen">
        <Providers>
          <Navbar />
          <main className="flex flex-grow">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
