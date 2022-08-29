import { Container } from '@/components/bosons/Container'
import { TodoForm } from '@/components/organisms/TodoForm'
import * as S from './styles'

export const HomePage = () => {
  return (
    <S.Wrapper>
      <Container>
        <TodoForm />
      </Container>
    </S.Wrapper>
  )
}
