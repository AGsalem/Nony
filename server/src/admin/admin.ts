import { FastifyReply, FastifyRequest } from "fastify";
export default function (req: FastifyRequest, reply: FastifyReply) {
        const html: string = `
        <!DOCTYPE html>
        <html lang="ar" dir="rtl">
        <head>
		<meta name="viewport" content="width=device-width, initial-scale=1.0" >
		<meta name="color-scheme" content="light dark" >
        <meta name="description" content="Nano_SSG is a free and open source market">
        <meta name="author" content="Ahmed Gamal Salem">
        <meta name="keywords" content="">
        <title>Neno admin</title>
        </head>
        <body style="background-color: aliceblue; color:black" >
        <h1>affffffg</h1>
        </body>
        </html>
`
    return reply.code(200).type('text/html').send(html)
}