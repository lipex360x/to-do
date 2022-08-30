import { Container } from '@/components/bosons/Container'
import { TodoForm } from '@/components/organisms/TodoForm'
import { TodoList } from '@/components/organisms/TodoList'
import { todoContext } from '@/contexts/todoContext'
import { useEffect } from 'react'

import * as S from './styles'

export const HomePage = () => {
  const { setTodos } = todoContext()

  useEffect(() => {
    setTodos()
  }, [setTodos])

  return (
    <S.Wrapper>
      <Container>
        <TodoForm />
        <TodoList />
      </Container>
    </S.Wrapper>
  )
}
