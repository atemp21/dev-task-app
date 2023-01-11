import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from "express";
import http from 'http';
import db from "./config/config";
import schema from "./graphql";

const start = async () => {
    const app = express();
    const port = process.env.PORT || 3000;
    const httpServer = http.createServer(app);

    const server = new ApolloServer({
        schema,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
    });

    await server.start();

    app.use(express.json());
    app.use(expressMiddleware(server));

    await new Promise<void>((resolve) => httpServer.listen({ port: port }, resolve));
    console.log(`🚀 Server ready at http://localhost:${port}/graphql`);
}

db.authenticate();
start();