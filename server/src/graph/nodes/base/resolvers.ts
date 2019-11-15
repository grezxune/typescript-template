import { Resolvers } from '../../gen-types';

export const resolvers: Resolvers = {
    Query: {
        placeholder: (_parent, _args, _ctx) => 'Query placeholder',
    },
    Mutation: {
        placeholder: () => 'Mutation placeholder',
    },
};
