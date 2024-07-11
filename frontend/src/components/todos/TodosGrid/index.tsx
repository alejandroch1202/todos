'use client'
import { Todo } from '@/interfaces'
import { TodoItem } from '@/components/todos'
// import { updateTodoState } from '@/services/todos'
// import { useRouter } from 'next/navigation'
import { updateTodoState } from '@/actions/todos'

interface TodosGridProps {
  todos?: Todo[]
}

export const TodosGrid = ({ todos = [] }: TodosGridProps) => {
  // const router = useRouter()

  // const updateTodo = async (id: string, isCompleted: boolean) => {
  //   await updateTodoState(id, isCompleted)
  //   router.refresh()
  // }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-2'>
      {todos.map((todo) => (
        <TodoItem
          updateTodo={updateTodoState}
          key={todo._id}
          todo={todo}
        />
      ))}
    </div>
  )
}
