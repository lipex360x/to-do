import * as S from './styles'

import clipBoardImage from '@/assets/clipboard.svg'

export const TodoEmpty = () => {
  return (
    <S.Wrapper>
      <img src={clipBoardImage} alt="" />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </S.Wrapper>
  )
}
