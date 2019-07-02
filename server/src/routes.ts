import * as Router from 'koa-router';
// import * as koaBody from 'koa-bodyparser';

// import {
    // graphqlKoa,
    // graphiqlKoa,
// } from 'apollo-server-koa';

export const routes = new Router();

// const { buildSchema } = require('graphql');

// const schema = buildSchema(`
//  type Query {
//    hello: String
//  }
// `);

// router.post('/graphql', graphqlKoa({ schema: myGraphQLSchema }));
// router.get('/graphql', graphqlKoa({ schema: myGraphQLSchema }));

// import { schema } from 'graphql/schema';

// API entrypoint
// const apiEntrypointPath = '/graphql';
// const graphQlOpts = graphqlKoa({
    // schema,
// });

// routes.get(apiEntrypointPath, graphQlOpts);
// routes.post(apiEntrypointPath, koaBody(), graphQlOpts);

// GraphiQL entrypoint
// routes.get('/graphiql', graphiqlKoa({ endpointURL: apiEntrypointPath }));

