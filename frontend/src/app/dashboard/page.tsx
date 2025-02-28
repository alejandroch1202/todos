import { WidgetItem } from '@/components/common'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/api/auth/signin')
  }

  return (
    <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 '>
      <WidgetItem title='Usuario conectado SSR'>
        <div className='flex flex-col'>
          <span>Name: {session.user?.name}</span>
          <span>Email: {session.user?.email}</span>
        </div>
      </WidgetItem>
    </div>
  )
}
