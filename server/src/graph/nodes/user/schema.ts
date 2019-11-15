import { gql } from 'apollo-server-express';

export default gql`
    extend type Query {
        viewer: User
    }

    type User {
        id: Int!
        firstName: String!
        lastName: String!
        email: String!
        birthdate: Int!
        signupDateTime: Int!
        # gender: gender
        # subscription: StripeSubscription!
    }
`;
