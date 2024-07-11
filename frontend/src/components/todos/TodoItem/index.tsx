'use client'

import { startTransition, useOptimistic } from 'react'
import { IoCheckboxOutline, IoSquareOutline } from 'react-icons/io5'
import { Todo } from '@/interfaces'
import './index.css'

interface TodoItemProps {
  todo: Todo
  updateTodo: (id: string, isCompleted: boolean) => void
}

export const TodoItem = ({ todo, updateTodo }: TodoItemProps) => {
  const [todoOptimistic, updateTodoOptimistic] = useOptimistic(
    todo,
    (state, newCompleteValue: boolean) => ({
      ...state,
      isCompleted: newCompleteValue
    })
  )

  const onClickUpdate = async () => {
    try {
      startTransition(() => {
        updateTodoOptimistic(!todoOptimistic.isCompleted)
        updateTodo(todoOptimistic._id, !todoOptimistic.isCompleted)
      })
    } catch (error) {
      console.log('Cant update optimisticly')
      startTransition(() => {
        updateTodoOptimistic(!todoOptimistic.isCompleted)
      })
    }
  }

  return (
    <div className={todoOptimistic.isCompleted ? 'todoDone' : 'todoPending'}>
      <div className='flex flex-col sm:flex-row justify-start items-center gap-4'>
        <div
          onClick={onClickUpdate}
          className={`flex p-2 rounded-md cursor-pointer hover:bg-opacity-60 ${
            todoOptimistic.isCompleted ? 'bg-blue-100' : 'bg-red-100'
          }`}
        >
          {todoOptimistic.isCompleted ? (
            <IoCheckboxOutline size={25} />
          ) : (
            <IoSquareOutline size={25} />
          )}
        </div>

        <div className='text-center sm:text-left'></div>

        {todoOptimistic.description}
      </div>
    </div>
  )
}
