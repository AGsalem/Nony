import fastify from "fastify";
import fs from 'fs'
import path from "path";
import { fileURLToPath } from 'node:url';
import 'dotenv/config'
import connection from "./plugin/connection";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = fastify({
    logger: true,
    // http2: true,
    // https: {
    //     allowHTTP1: true,
    //     key: fs.readFileSync(path.join(__dirname, '..', 'ssl', 'localhost+1-key.pem')),
    //     cert: fs.readFileSync(path.join(__dirname, '..', 'ssl', 'localhost+1.pem'))
    // }
})
await app.register(connection)
const Port: any = process.env.PORT || 5000
app.listen({ port: Port, host: '0.0.0.0' })
