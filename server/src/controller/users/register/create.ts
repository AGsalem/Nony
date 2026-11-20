import { FastifyRequest, FastifyReply } from "fastify"
export default function (req: FastifyRequest, reply: FastifyReply) {
    reply.send('welcom')
}