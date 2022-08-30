import { TodoBadge } from '@/components/molecules/TodoBadge'
import { TodoItem } from '@/components/molecules/TodoItem'
import { todoContext } from '@/contexts/todoContext'
import * as S from './styles'

export const TodoList = () => {
  const { todos } = todoContext()
  return (
    <S.Wrapper>
      <header>
        <TodoBadge color='blue' text='Tarefas criadas' total={0} />
        <TodoBadge color='purple' text='Concluídas' total={0} />
      </header>

      <section>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </section>
    </S.Wrapper>
  )
}
