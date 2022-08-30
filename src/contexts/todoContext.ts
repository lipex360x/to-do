import { TodoDto } from '@/dtos/TodoDto'
import { produce } from 'immer'
import create from 'zustand'

type TodoContextProps = {
  todos: TodoDto[]
  removeTodo: (id: string) => void
  addTodo: (todo: string) => void
}

export const todoContext = create<TodoContextProps>((set) => ({
  todos: [],

  addTodo: (todo: string) => {
    const newTodo = {
      id: new Date().toISOString(),
      todo,
      hasDone: false
    }

    set((state) => produce(state, (draft) => {
      draft.todos.push(newTodo)
    }))
  },

  removeTodo: (id: string) => {
    set((state) => {
      const getIndex = state.todos.findIndex((todo) => todo.id === id)

      if (getIndex < 0) return state

      return produce(state, (draft) => {
        draft.todos = state.todos.filter(todo => todo.id !== id)
      })
    })
  }

}))
