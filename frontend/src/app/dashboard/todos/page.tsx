import { NewTodo, TodosGrid } from '@/components/todos'

export const metadata = {
  title: 'Rest Endoints',
  description: 'ToDos fetched from the client'
}

export default async function TodosPage() {
  const { data } = await fetch('http://localhost:4000/api/v1/todos', {
    cache: 'no-cache'
  }).then((res) => res.json())

  return (
    <div>
      <div className='w-full px-3 mx-5 mb-5'>
        <NewTodo />
      </div>
      <TodosGrid todos={data} />
    </div>
  )
}
