import { z } from 'zod'

const messageValidation = z
    .string()
    .min(10, { message: 'Content must be at least 10 characters long' })
    .max(500, { message: 'Content must be at most 500 characters long' })

export const MessageSchema = z.object({
    content: messageValidation
})
