const { gql } = require('apollo-server');
const pkg = require('graphql-iso-date')


const { GraphQLDateTime } = pkg;
const customScalarResolver = { Date: GraphQLDateTime };


const typeDefs = gql`

    scalar Date

    type User {
        id: Int
        username: String
        posts: [Post]
    }

    type Post {
        id: Int
        author: User
        createdAt: Date
        updatedAt: Date
        content: String
        parent: Post
        post_id: Int
        comments: [Post]
    }


    type Query {
        allUsers: [User]
        allPosts: [Post]
        
        getUser(id: Int!): User
        getPost(id: Int!): Post
        getComments(id: Int!): [Post]
    }


    type Mutation {
        createPost(content: String): Post
        createComment(post_id: Int, content:String): Post
        updatePost(id: Int, content: String): Post
        deletePost(id: Int): Post
    }
`;

module.exports = typeDefs;