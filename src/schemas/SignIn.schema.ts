import { z } from 'zod'

const identifierValidation = z.string()
const passwordValidation = z.string()

export const SignInSchema = z.object({
    identifier: identifierValidation,
    password: passwordValidation
})
