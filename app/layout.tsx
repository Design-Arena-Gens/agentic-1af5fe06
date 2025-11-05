import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FuelNow - Premium Fuel Delivery',
  description: 'Ultra-modern fuel delivery app interface mockup',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
