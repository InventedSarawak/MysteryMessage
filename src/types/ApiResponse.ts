import { MessageType } from '@/models/Message.model'

export type ApiResponse = {
    success: boolean
    message: string
    isAcceptingMessages?: boolean
    messages?: Array<MessageType>
}
