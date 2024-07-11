import Image from 'next/image'
import Link from 'next/link'
import { CiLogout } from 'react-icons/ci'
import { SidebarItem } from '@/components/common'
import {
  IoCalendarOutline,
  IoCheckboxOutline,
  IoCodeWorking,
  IoGrid,
  IoListOutline,
  IoPersonOutline
} from 'react-icons/io5'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

const items = [
  { title: 'Dashboard', icon: <IoCalendarOutline />, path: '/dashboard' },
  {
    title: 'Rest Enpoints',
    icon: <IoCheckboxOutline />,
    path: '/dashboard/todos'
  },
  {
    title: 'Server Actions',
    icon: <IoListOutline />,
    path: '/dashboard/actions'
  },
  {
    title: 'Cookies',
    icon: <IoCodeWorking />,
    path: '/dashboard/cookies'
  },
  {
    title: 'Products',
    icon: <IoGrid />,
    path: '/dashboard/products'
  },
  {
    title: 'Profile',
    icon: <IoPersonOutline />,
    path: '/dashboard/profile'
  }
]

export const Sidebar = async () => {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/api/auth/signin')
  }

  return (
    <aside className='ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]'>
      <div>
        <div className='-mx-6 px-6 py-4'>
          <Link
            href='/dashboard'
            title='home'
          >
            <Image
              width={150}
              height={150}
              src='https://tailus.io/sources/blocks/stats-cards/preview/images/logo.svg'
              className='w-32'
              alt='tailus logo'
            />
          </Link>
        </div>

        <div className='mt-8 text-center'>
          <Image
            width={150}
            height={150}
            src={
              session.user?.image ??
              'https://eu.ui-avatars.com/api/?name=John+Doe&size=250'
            }
            alt=''
            className='w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28'
          />
          <h5 className='hidden mt-4 text-xl font-semibold text-gray-600 lg:block'>
            {session.user?.name ?? ''}
          </h5>
          <span className='hidden text-gray-400 lg:block'>Admin</span>
        </div>

        <ul className='space-y-2 tracking-wide mt-8'>
          {/* Active className: text-white bg-gradient-to-r from-sky-600 to-cyan-400 */}
          {items.map((item) => (
            <SidebarItem
              key={item.title}
              {...item}
            />
          ))}
        </ul>
      </div>

      <div className='px-6 -mx-6 pt-4 flex justify-between items-center border-t'>
        <button className='px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group'>
          <CiLogout />
          <span className='group-hover:text-gray-700'>Logout</span>
        </button>
      </div>
    </aside>
  )
}
