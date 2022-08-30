import * as z from 'zod'

const formSchema = z.object({
  todo: z.string()
})

export default formSchema
export type FormInputs = z.infer<typeof formSchema>
