import { gql } from 'apollo-server-express';

export default gql`
    schema {
        query: Query
        mutation: Mutation
        subscription: Subscription
    }
`;
