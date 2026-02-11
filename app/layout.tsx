import type { Metadata } from 'next'
import './globals.css'  // ← MUST BE HERE
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Bhivravnath Industries | Industrial Fabrication Excellence',
  description: '30+ years of trusted industrial fabrication in Ahilyanagar.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
