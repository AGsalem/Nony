import fp from "fastify-plugin";
import helmet from "@fastify/helmet";
import cookies from "@fastify/cookie"
import cors from '@fastify/cors';
import route from "../route";
import Static from "./static";
export default fp(async (connection) => {
  await connection.register(cors, { origin: true });
  await connection.register(helmet, {
    contentSecurityPolicy: {
      directives: {
        upgradeInsecureRequests: null,
      },
    },
  })
  await connection.register(cookies)
  await connection.register(Static)
  await connection.register(route)
})