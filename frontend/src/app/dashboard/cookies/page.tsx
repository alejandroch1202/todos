export const dynamic = 'force-dynamic'

import { TabBar } from '@/components/common'
import { cookies } from 'next/headers'

export const metadata = {
  title: 'Cookies Page',
  description: 'Managing cookies'
}

export default function CookiesPage() {
  const cookieStore = cookies()
  const cookieTab = cookieStore.get('selected-tab')?.value ?? '1'

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
      <div className='flex flex-col'>
        <h3 className='text-2xl'>Tabs </h3>
        <TabBar currentTab={Number(cookieTab)} />
      </div>
    </div>
  )
}
