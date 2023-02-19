import {
    createMediaHandler, mediaHandlerConfig,
} from 'next-tinacms-dos/dist/handlers'
import { isAuthorized } from '@tinacms/auth'

export const config = mediaHandlerConfig;

export default createMediaHandler({
    config: {
        endpoint: process.env.NEXT_PUBLIC_SPACES_ENDPOINT,
        credentials: {
            accessKeyId: process.env.NEXT_PUBLIC_SPACES_KEY || '',
            secretAccessKey: process.env.SPACES_SECRET_KEY || '',
        },
        region: 'us-east-1',
    },
    bucket: process.env.NEXT_PUBLIC_SPACES_NAME || '',
    authorized: async (req, _res) => {
        if (process.env.NODE_ENV === 'development') {
            return true
        }
        try {
            const user = await isAuthorized(req)

            return user && user.verified
        } catch (e) {
            console.error(e)
            return false
        }
    },
})

