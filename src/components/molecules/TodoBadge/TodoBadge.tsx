import * as S from './styles'

export type TodoBadgeProps = {
  color: 'blue' | 'purple'
  text: string
  total: string
}

export const TodoBadge = ({ color, text, total }: TodoBadgeProps) => {
  return (
    <S.Wrapper color={color}>
      <strong>{text}</strong>
      <span>{total}</span>
    </S.Wrapper>
  )
}
