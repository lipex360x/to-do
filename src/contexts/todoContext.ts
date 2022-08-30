import create from 'zustand'
import { produce } from 'immer'
import { TodoDto } from '@/dtos/TodoDto'
import storageService from '@/services/localStorage.service'
import { TodoList } from '@/components/organisms/TodoList'

type TodoContextProps = {
  todos: TodoDto[]
  setTodos: () => void
  addTodo: (todo: string) => void
  setIsDone: (id: string) => void
  removeTodo: (id: string) => void
}

export const todoContext = create<TodoContextProps>((set) => ({
  todos: [],

  setTodos: () => {
    set((state) => produce(state, (draft) => {
      if (TodoList.length === 0) storageService.setItem('@todos-1.0.0', [])
      draft.todos = storageService.getItem('@todos-1.0.0')
    }))
  },

  addTodo: (todo: string) => {
    const newTodo = {
      id: new Date().toISOString(),
      todo,
      hasDone: false
    }

    set((state) => produce(state, (draft) => {
      draft.todos.push(newTodo)
      storageService.setItem('@todos-1.0.0', draft.todos)
    }))
  },

  setIsDone: (id: string) => {
    set((state) => {
      const getIndex = state.todos.findIndex((todo) => todo.id === id)
      if (getIndex < 0) return state

      return produce(state, (draft) => {
        const TodoState = draft.todos[getIndex].hasDone
        draft.todos[getIndex].hasDone = !TodoState
        storageService.setItem('@todos-1.0.0', draft.todos)
      })
    })
  },

  removeTodo: (id: string) => {
    set((state) => {
      const getIndex = state.todos.findIndex((todo) => todo.id === id)
      if (getIndex < 0) return state

      return produce(state, (draft) => {
        draft.todos = state.todos.filter(todo => todo.id !== id)
        storageService.setItem('@todos-1.0.0', draft.todos)
      })
    })
  }

}))
