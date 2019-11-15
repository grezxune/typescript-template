import { ApolloServer } from 'apollo-server-express';
import { GraphQLSchema } from 'graphql';

import Context from './context';
import schema from './schema';

export default new ApolloServer({
    schema: (schema as unknown) as GraphQLSchema,
    context: req => new Context(req),
});
