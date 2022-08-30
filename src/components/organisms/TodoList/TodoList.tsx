import { TodoBadge } from '@/components/molecules/TodoBadge'
import { TodoEmpty } from '@/components/molecules/TodoEmpty'
import { TodoItem } from '@/components/molecules/TodoItem'
import { todoContext } from '@/contexts/todoContext'
import * as S from './styles'

export const TodoList = () => {
  const { todos } = todoContext()

  const getFinished = () => {
    const finished = todos.filter((todo) => todo.hasDone).length
    return todos.length === 0 ? '0' : `${finished} de ${todos.length}`
  }

  return (
    <S.Wrapper>
      <header>
        <TodoBadge color='blue' text='Tarefas criadas' total={todos.length.toString()} />
        <TodoBadge color='purple' text='Concluídas' total={getFinished()} />
      </header>

      <section>
        {todos.length === 0 && (<TodoEmpty />)}
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </section>
    </S.Wrapper>
  )
}
