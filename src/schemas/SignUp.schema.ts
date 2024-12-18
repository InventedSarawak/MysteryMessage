import { z } from 'zod'

const usernameValidation = z
    .string()
    .min(2, { message: 'Username must be at least 2 characters long' })
    .max(20, { message: 'Username must be at most 20 characters long' })
    .regex(/^[a-zA-Z0-9_]+$/, { message: 'Username can only contain letters, numbers, and underscores' })

const emailValidation = z.string().email({ message: 'Invalid email' })

const passwordValidation = z.string().min(8, { message: 'Password must be at least 8 characters long' })

export const SignUpSchema = z.object({
    username: usernameValidation,
    email: emailValidation,
    password: passwordValidation
})
