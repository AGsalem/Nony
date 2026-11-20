import { DoneFuncWithErrOrRes, FastifyReply, FastifyRequest } from 'fastify';
export default function Auth(req: FastifyRequest, res: FastifyReply, done: DoneFuncWithErrOrRes) {
    const a: any = req.headers["user-agent"]
    if (1 + 1 != 2) {
        return res.send({ "b": "fire fox" })
    }
    done()
}