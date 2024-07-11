import { IoCheckboxOutline, IoSquareOutline } from 'react-icons/io5'
import { Todo } from '@/interfaces'
import './index.css'

interface TodoItemProps {
  todo: Todo
  updateTodo: (id: string, isCompleted: boolean) => void
}

export const TodoItem = ({ todo, updateTodo }: TodoItemProps) => {
  return (
    <div className={todo.isCompleted ? 'todoDone' : 'todoPending'}>
      <div className='flex flex-col sm:flex-row justify-start items-center gap-4'>
        <div
          onClick={() => updateTodo(todo._id, !todo.isCompleted)}
          className={`flex p-2 rounded-md cursor-pointer hover:bg-opacity-60 ${
            todo.isCompleted ? 'bg-blue-100' : 'bg-red-100'
          }`}
        >
          {todo.isCompleted ? (
            <IoCheckboxOutline size={25} />
          ) : (
            <IoSquareOutline size={25} />
          )}
        </div>

        <div className='text-center sm:text-left'></div>

        {todo.description}
      </div>
    </div>
  )
}
