import { gql } from 'apollo-server-express';

export default gql`
    type Query {
        placeholder: String!
        viewer: User
        testOnRoot: String
    }
`;
