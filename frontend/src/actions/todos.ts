'use server'
import { revalidatePath } from 'next/cache'

export const updateTodoState = async (id: string, isCompleted: boolean) => {
  const body = { isCompleted }
  const response = await fetch(`http://localhost:4000/api/v1/todos/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }).then((res) => res.json())
  revalidatePath('/dashboard/actions') // key
  return response.message
}
