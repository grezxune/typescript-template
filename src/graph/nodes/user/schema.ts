import { gql } from 'apollo-server-express';

export default gql`
    extend type Query {
        testOnExtend: User
    }

    "User type"
    type User {
        id: Int!
        firstName: String!
        lastName: String!
        email: String!
        birthdate: Int!
        signupDateTime: Int!
        test: String
        # gender: gender
        # subscription: StripeSubscription!
    }
`;
