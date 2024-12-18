import { z } from 'zod'

const verifyCodeValidation = z
    .string()
    .length(6, { message: 'Verify Code must be 6 characters long' })
    .regex(/^[0-9]+$/, { message: 'Verify Code can only contain numbers' })

export const VerifySchema = z.object({
    verifyCode: verifyCodeValidation
})
