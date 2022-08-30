import { TodoBadge } from '@/components/molecules/TodoBadge'
import { TodoItem } from '@/components/molecules/TodoItem'
import * as S from './styles'

export const TodoList = () => {
  return (
    <S.Wrapper>
      <header>
        <TodoBadge color='blue' text='Tarefas criadas' total={0} />
        <TodoBadge color='purple' text='Concluídas' total={0} />
      </header>

      <section>
        <TodoItem />
        <TodoItem />
      </section>
    </S.Wrapper>
  )
}
