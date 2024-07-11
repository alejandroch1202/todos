import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/components/auth'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ToDos',
  description: 'Admin your ToDos'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <AuthProvider>
      <html lang='en'>
        <body className={inter.className}>{children}</body>
      </html>
    </AuthProvider>
  )
}
