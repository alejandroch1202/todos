'use client'
import { useSession, signOut } from 'next-auth/react'
import { CiLogout } from 'react-icons/ci'
import { IoSave, IoShieldOutline } from 'react-icons/io5'

export const LogoutButton = () => {
  const { data: session, status } = useSession()

  if (status === 'loading')
    return (
      <button className='px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group'>
        <IoShieldOutline />
        <span className='group-hover:text-gray-700'>Loading...</span>
      </button>
    )
  else if (status === 'unauthenticated')
    return (
      <button className='px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group'>
        <IoSave />
        <span className='group-hover:text-gray-700'>Login</span>
      </button>
    )

  return (
    <button
      onClick={() => signOut()}
      className='px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group'
    >
      <CiLogout />
      <span className='group-hover:text-gray-700'>Logout</span>
    </button>
  )
}
