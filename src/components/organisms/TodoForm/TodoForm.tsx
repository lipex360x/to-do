import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TextField } from '@/components/atoms/FormElements/TextField'
import { Button } from '@/components/atoms/Button'
import toastService from '@/services/toast.service'
import formSchema, { FormInputs } from './form.schema'

import * as S from './styles'
import { PlusCircle } from 'phosphor-react'
import { todoContext } from '@/contexts/todoContext'

export const TodoForm = () => {
  const { addTodo } = todoContext()
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting }
  } = useForm<FormInputs>({
    resolver: zodResolver(formSchema)
  })

  const submitForm = ({ todo }: FormInputs) => {
    toastService.success('Tarefa registrada com sucesso')
    addTodo(todo)
    reset()
  }

  return (
    <S.Form onSubmit={handleSubmit(submitForm)}>
      <TextField
        placeholder='Type text'
        required
        {...register('todo')}
      />

      <Button
        disabled={isSubmitting}
        icon={<PlusCircle size={24} />}
        iconPosition="right"
        type='submit'
      >
        Criar
      </Button>
    </S.Form>
  )
}
