import mongoose, { Schema, Document } from 'mongoose'
import { MessageSchema, MessageType } from './Message.model'

const emailPattern: RegExp =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g

export type UserType = Document & {
    username: string
    email: string
    password: string
    verifyCode: string
    verifyCodeExpiry: Date
    isVerified: boolean
    isAcceptingMessage: boolean
    messages: MessageType[]
}

const UserSchema: Schema<UserType> = new Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        match: [emailPattern, 'Invalid Email']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [8, 'Password must be at least 8 characters long']
    },
    verifyCode: {
        type: String,
        required: [true, 'Verify Code is required']
    },
    verifyCodeExpiry: {
        type: Date,
        required: [true, 'Verify Code Expiry is required']
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isAcceptingMessage: {
        type: Boolean,
        default: true
    },
    messages: [MessageSchema]
})

const UserModel = (mongoose.models.User as mongoose.Model<UserType>) || mongoose.model<UserType>('User', UserSchema)

export { UserModel, UserSchema }
