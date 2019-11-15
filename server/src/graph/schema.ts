import { makeExecutableSchema } from 'apollo-server-express';
import * as resolversRaw from './resolvers';
import { merge } from 'lodash';
import * as typeDefs from './typeDefs';

const resolvers = Object.values((resolversRaw as any) as object)
    .map(obj => (obj as any) as object)
    .reduce((acc, cur) => merge(acc, cur));
const schema = makeExecutableSchema({
    typeDefs: Object.values(typeDefs),
    // resolvers: Object.values((resolvers as any) as object)
    //     .map(obj => (obj as any) as object)
    //     .reduce((acc, cur) => ({ ...(acc as any), ...(cur as any) }), {}),
    resolvers: resolvers as any,
});

export default schema;
