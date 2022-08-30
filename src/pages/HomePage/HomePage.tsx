import { Container } from '@/components/bosons/Container'
import { TodoForm } from '@/components/organisms/TodoForm'
import { TodoList } from '@/components/organisms/TodoList'

import * as S from './styles'

export const HomePage = () => {
  return (
    <S.Wrapper>
      <Container>
        <TodoForm />
        <TodoList />
      </Container>
    </S.Wrapper>
  )
}
