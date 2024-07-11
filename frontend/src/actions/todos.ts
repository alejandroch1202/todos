'use server'
import { revalidatePath } from 'next/cache'

export const sleep = async (seconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000))
}

export const createTodo = async (description: string) => {
  const body = { description }
  const response = await fetch('http://localhost:4000/api/v1/todos/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }).then((res) => res.json())
  revalidatePath('/dashboard/actions') // key point in Next 14
  return response.message
}

export const updateTodoState = async (id: string, isCompleted: boolean) => {
  await sleep(3)
  const body = { isCompleted }
  const response = await fetch(`http://localhost:4000/api/v1/todos/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }).then((res) => res.json())
  revalidatePath('/dashboard/actions') // key point in Next 14
  return response.message
}

export const removeCompletedTodos = async () => {
  const response = await fetch('http://localhost:4000/api/v1/todos', {
    method: 'DELETE'
  }).then((res) => res.json())
  revalidatePath('/dashboard/actions') // key point in Next 14
  return response.message
}
