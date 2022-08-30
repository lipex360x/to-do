import { Button } from '@/components/atoms/Button'
import { Checkbox } from '@/components/atoms/FormElements/Checkbox'
import { todoContext } from '@/contexts/todoContext'
import toastService from '@/services/toast.service'
import { Trash } from 'phosphor-react'
import { useState } from 'react'
import * as S from './styles'

type TodoItemProps = {
  id: string
  todo: string
  hasDone: boolean
}

export const TodoItem = ({ id, hasDone, todo }: TodoItemProps) => {
  const [done, setDone] = useState(hasDone)
  const { removeTodo, setIsDone } = todoContext()

  const handleDone = () => {
    setIsDone(id)
    setDone(!done)
  }

  const handleDelete = () => {
    removeTodo(id)
    toastService.success('Tarefa Removida')
  }

  return (
    <S.Wrapper isDone={done}>
      <Checkbox
        isChecked={done}
        onCheck={handleDone}
      />
      <span>{todo}</span>
      <Button
        size='small'
        minimal
        onClick={handleDelete}
        icon={<Trash size={20} />}
      />
    </S.Wrapper>
  )
}
