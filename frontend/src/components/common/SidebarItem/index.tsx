'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface SidebarItemProps {
  icon: React.ReactNode
  title: string
  path: string
}

export const SidebarItem = ({ icon, title, path }: SidebarItemProps) => {
  const pathname = usePathname()

  return (
    <li>
      <Link
        href={path}
        className={`relative px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 hover:bg-gray-200 ${
          path === pathname
            ? 'text-white bg-gradient-to-r from-sky-600 to-cyan-400'
            : ''
        } `}
      >
        {icon}
        <span className='-mr-1 font-medium'>{title}</span>
      </Link>
    </li>
  )
}
