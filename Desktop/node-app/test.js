
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
require('./config');

const { User } = require('./models');

const typeDefs = gql`
    type User {
        id: ID!
        userName: String
        email: String
    }
    type Query {
        getUsers: [User]
    }
    type Mutation {
        addUser(userName: String!, email: String!): User
    }
`;

const resolvers = {
    Query: {
        getUsers: async () => await User.find({}).exec()
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

































































/*const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
require('./config');
const { User } = require('./models');

const typeDefs = gql`
    type Query {
        hello: String
    }
`;

const resolvers = {
    Query: {
        hello: () => 'Hello World!'
    }
};

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);












/*const express = require('express'),
    mongoose = require('mongoose'),
    dataBaseConfig = require('./db/database');

const User = require('./model/product');
let PRODUCT = require("./model/product");

mongoose.Promise = global.Promise;
mongoose.connect(dataBaseConfig.db, {
    useNewUrlParser: true
}).then(() => {
    console.log('Database connected sucessfully ')
},
    error => {
        console.log('Could not connected to database : ' + error)
    }
)
//
/*var product = new PRODUCT();
product.name = '';
product.save(function (error) {
    console.log('errors', error);
    let errors = getErrors(error);
    console.log(errors);
});
function getErrors(error) {
    let errorArray = [];
    if (error) {
        if (error.errors['name']) {
            console.log(error.errors['name'].message)
            errorArray.push('name');
        }
    } else {
        console.log('No Errors Product Saved Succefully')
    }
}*/
/*
var product = new PRODUCT();
product.collection.insertMany([
    { name: '', age: 20 },
    { name: 'Kartik', age: 44 },
    { name: 'Niharika', age: 20 }
]).then(function () {
    console.log("Data inserted")  // Success
}).catch(function (error) {
    console.log('error', error)      // Failure
});

const app = express();

app.get('*', (req, res, next) => {
    setImmediate(() => {
        next(new Error('Something went wrong'));
    });
});

app.use((error, req, res, next) => {

    res.json({
        message: error.message
    });
});



const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})*/