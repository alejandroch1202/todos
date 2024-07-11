// export const dynamic = 'force-dynamic'

import { NewTodo, TodosGrid } from '@/components/todos'

export const metadata = {
  title: 'Server Actions',
  description: 'ToDos fetched from the server'
}

export default async function ActionsPage() {
  const { data } = await fetch('http://localhost:4000/api/v1/todos', {
    // cache: 'no-cache'
  }).then((res) => res.json())

  console.log('construido')

  return (
    <div>
      <div className='w-full px-3 mx-5 mb-5'>
        <NewTodo />
      </div>
      <TodosGrid todos={data} />
    </div>
  )
}
