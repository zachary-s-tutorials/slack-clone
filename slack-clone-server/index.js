import express from 'express';
import {ApolloServer} from 'apollo-server-express';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
import path from 'path';
import models from './models';
import cors from 'cors';



const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './schema')));

const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')));

const schema = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
        models,
        user: {
            id: 1,
        }
        
    },
    playground:{
        endpoint: '/graphql',
    },
});

const app = express();
app.use(cors('*'));

// bodyParser is needed just for POST.
schema.applyMiddleware({ app });

models.sequelize.sync({}).then(() => {
    app.listen(8080);
});
