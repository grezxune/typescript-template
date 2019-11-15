import { Resolvers, User } from '../../gen-types';

export const resolvers: Resolvers = {
    Query: {
        viewer: () => {
            return {
                id: 123,
                firstName: 'Tommy',
                lastName: 'Treb',
                birthdate: 1234453534,
                email: 'tomtrezb2003@gmail.com',
                signupDateTime: 1253453453,
            } as User;
        },
    },
    User: {},
};
