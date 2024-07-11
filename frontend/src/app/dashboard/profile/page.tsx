'use client'

import { useSession } from 'next-auth/react'

export default function ProfilePage() {
  const { data: session } = useSession()

  return (
    <div>
      <div className='flex flex-col'>
        <span>Nombre: {session?.user?.name ?? ''}</span>
        <span>Email: {session?.user?.email ?? ''}</span>
      </div>
    </div>
  )
}
