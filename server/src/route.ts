import { FastifyPluginAsync, FastifyRequest, FastifyReply } from 'fastify';
import admin from './admin/admin';

const route: FastifyPluginAsync = async (fastify): Promise<void> => {
    fastify.get('/admin', admin)
    fastify.get('/', (req: FastifyRequest, reply: FastifyReply) => {
        reply.code(200).sendFile('index.html')
    })
    fastify.setNotFoundHandler((req: FastifyRequest, reply: FastifyReply) => {
        reply.sendFile('404/index.html')
    })
    

}

export default route