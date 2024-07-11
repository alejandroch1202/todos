'use client'
import { createTodo, removeCompletedTodos } from '@/services/todos'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { IoTrashOutline } from 'react-icons/io5'

export const NewTodo = () => {
  const [description, setDescription] = useState('')

  const router = useRouter()

  const onSumbit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (description.length === 0) return
    setDescription('')
    const response = await createTodo(description)
    console.log({ response })
    router.refresh()
  }

  const handleDelete = async () => {
    const response = await removeCompletedTodos()
    console.log({ response })
    router.refresh()
  }

  return (
    <form
      onSubmit={onSumbit}
      className='flex w-full'
    >
      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        type='text'
        className='w-6/12 -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all'
        placeholder='¿Qué necesita ser hecho?'
      />

      <button
        type='submit'
        className='flex items-center justify-center rounded ml-2 bg-sky-500 py-2 px-4 text-white hover:bg-sky-700 transition-all'
      >
        Crear
      </button>

      <span className='flex flex-1'></span>

      <button
        onClick={() => handleDelete()}
        type='button'
        className='flex items-center justify-center rounded ml-2 bg-red-400 py-2 px-4 text-white hover:bg-red-700 transition-all'
      >
        <IoTrashOutline className='mr-2' />
        Borrar completados
      </button>
    </form>
  )
}
