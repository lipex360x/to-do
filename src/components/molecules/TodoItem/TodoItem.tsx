import { Button } from '@/components/atoms/Button'
import { Checkbox } from '@/components/atoms/FormElements/Checkbox'
import { Trash } from 'phosphor-react'
import { useState } from 'react'
import * as S from './styles'

export const TodoItem = () => {
  const [done, setDone] = useState(false)

  console.log('done', done)

  return (
    <S.Wrapper isDone={done}>
      <Checkbox
        onCheck={() => setDone(!done)}
      />
      <span>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</span>
      <Button
        size='small'
        minimal
        icon={<Trash size={20} />}
      />
    </S.Wrapper>
  )
}
