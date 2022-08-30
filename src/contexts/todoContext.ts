import { TodoDto } from '@/dtos/TodoDto'
import { produce } from 'immer'
import create from 'zustand'

type TodoContextProps = {
  todos: TodoDto[]
  addTodo: (todo: string) => void
  setIsDone: (id: string) => void
  removeTodo: (id: string) => void
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

  setIsDone: (id: string) => {
    set((state) => {
      const getIndex = state.todos.findIndex((todo) => todo.id === id)
      if (getIndex < 0) return state

      return produce(state, (draft) => {
        const TodoState = draft.todos[getIndex].hasDone
        draft.todos[getIndex].hasDone = !TodoState
      })
    })
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
