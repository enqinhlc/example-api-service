import 'reflect-metadata';
import * as dotenv from 'dotenv';
dotenv.config({ path: __dirname + '/.env' });

// api server
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { buildSchema } from 'type-graphql';
import { GraphQLError } from 'graphql';

import AppDataSource from '@/utils/dataSource';
// import apolloContext from './middleware/apolloContext';
// import expressAuthorization from './middleware/expressAuthorization';

// endpoints & resolvers
import { Resolvers } from '@/resolvers';
import { Endpoints } from '@/endpoint';

// others
import { checkEnvVariable } from '@/utils/check_env_variable';
import { IS_PROD } from '@/config/constants';

const main = async () => {
  // initialize datasource to db
  await AppDataSource.initialize();

  // create base api
  const app = express();

  // app.use(expressAuthorization);

  app.use(Endpoints);

  // initialize graphql server configurations
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: Resolvers,
      validate: false,
    }),
    debug: IS_PROD,
    csrfPrevention: IS_PROD,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
    // context: apolloContext,
    formatError: (error: GraphQLError) => {
      const message = error.message.replace('Context creation failed: ', '');
      return new Error(message);
    },
  });

  // start graphql server
  await apolloServer.start();

  // attach graphql server to base api
  apolloServer.applyMiddleware({ app });

  // initial page for the base api
  app.get('/', (_, res) => {
    res.json({ serverStatus: true, serverTime: new Date() });
  });

  // check the API_PORT variable
  checkEnvVariable('API_PORT');

  // attach base api to port
  app.listen(process.env.API_PORT, () => {
    console.log('Service is running...');
    // console.log(`http://localhost:${process.env.API_PORT}`);
    // console.log(`http://localhost:${process.env.API_PORT}/graphql`);
  });
};

// this block will catch the errors
try {
  main();
} catch (error) {
  console.error(error);
}
