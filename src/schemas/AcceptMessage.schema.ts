import { z } from 'zod'

const acceptMessageValidation = z.boolean()

export const AcceptMessageSchema = z.object({
    acceptMessages: acceptMessageValidation
})
