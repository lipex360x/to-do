import { TodoDto } from '@/dtos/TodoDto'
import { produce } from 'immer'
import create from 'zustand'

type TodoContextProps = {
  todos: TodoDto[] | []
  finishTodo: (id: string) => void
}

export const todoContext = create<TodoContextProps>((set) => ({
  todos: [
    {
      id: '1',
      todo: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      hasDone: false
    },

    {
      id: '2',
      todo: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      hasDone: true
    }
  ],

  finishTodo: (id: string) => {
    set((state) => {
      const getIndex = state.todos.findIndex((todo) => todo.id === id)

      if (getIndex < 0) return state

      return produce(state, (draft) => {
        draft.todos = state.todos.filter(todo => todo.id !== id)
      })
    })
  }

}))
