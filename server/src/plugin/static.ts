import path from 'path'
import fp from "fastify-plugin";
export default fp((fastify) => {
    fastify.register(import('@fastify/static'), {
        root: path.join(process.cwd(), 'out/dist'),
        prefix: '/',
        // maxAge: '1d',
        // cacheControl: true,
        // etag: true,
    })

})