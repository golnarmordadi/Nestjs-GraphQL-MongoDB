const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
require('./config');

const { User } = require('./models');

const typeDefs = gql`
    type User {
        Id:Int
        userName: String
        email: String
    }
    type Query {
        getUsers( Id: Int ): [User],
        getFilterUsers: [User],
        getPagination( Id: Int ): [User],
        getPaginationByFilet( skip: Int ): [User]
    }
    type Mutation {
        addUser(Id: Int, userName: String!, email: String!): User
    }
`;

const resolvers = {

    Query: {

        getUsers: async (_, args) =>
            await User.find({ Id: args.Id }).limit(10).exec(),

        getFilterUsers: async () =>
            await User.find({ userName: 'uuee' }).sort({ email: 1 }),//.limit(1),

        getPagination: async (_, args) => await User.find({ 'Id': { '$gt': 5 } }).limit(2)
        //.sort({ Id: 'asc' })
        //.skip(1)
        // .limit(10)),

    },
    Mutation: {
        addUser: async (_, args) => {
            try {
                let response = await User.create(args);
                return response;
            } catch (e) {
                return e.message;
            }
        }
    }
};

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
