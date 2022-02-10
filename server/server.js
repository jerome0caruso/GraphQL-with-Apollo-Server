//parses the schema so it knows thats is graphQL
const { ApolloServer, gql } = require('apollo-server');


//GraphQL schema definition language
//Kinda like a Class
// const typeDefs = gql`
//     schema {
//         query: Query {
//             greeting: String,
//             test: String
//         }
//     }    
// `;
const typeDefs = gql`
    type Query {
        greeting: String,
        test: String
    }
`;


//resolver functions
const resolvers = {
    Query: {
        greeting: () => 'Hello GraphQL world!!',
        test: () => 'Hello again from test!'
    }
};

const server = new ApolloServer({typeDefs, resolvers});
server.listen({port: 9000})
    .then(({url}) => console.log(`Server running at ${url}`))