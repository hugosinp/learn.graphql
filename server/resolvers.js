const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

const resolvers = {
    Query: {
        // GET all Users
        allUsers: async () => {
          return prisma.user.findMany()
        },

        // Get all Posts (and comments)
        allPosts: async () => {
          return prisma.post.findMany({include: {parent: true, comments : true, author: true}})
        },

        // GET User by ID
        getUser: async (parent, args, context, info) => {
          const { id } = args
          return prisma.user.findUnique({where: {id:id}})   
        },

        // GET Post by ID
        getPost: async (parent, args, context, info) => {
            const { id } = args
            return prisma.post.findUnique({where: {id:id}}, {include: {parent: true, comments : true, author: true}})    
        },

        // GET Comments By Post ID
        getComments: async (parent, args, context, info) => {
          const { id } = args
          return prisma.post.findMany({where: {post_id: id}, include: {parent: true, comments : true, author: true}})    
        },
    },

    
    Mutation: {

      // POST Create an User (Register Method)
      createUser: (parent, args, context, info) => {
        const { username, password } = args
        return prisma.user.create({
          data: {
            username: username,
            password: password,
          },
        })
      },

      // POST Create a Post
      createPost: (parent, args, context, info) => {
        const { content } = args

        return prisma.post.create({
          data: {
            author_id: 1,
            content: content,
          },
        })
      },

      // POST Create a Post with a parent ID (Create a Comment)
      createComment: (parent, args, context, info) => {
        const { post_id, content } = args

        return prisma.post.create({
          data: {
            author_id: 1,
            content: content,
            post_id: post_id
          },
        })
      },

      // PUT Updates a Post (or Comment) by ID
      updatePost: (parent, args, context, info) => {
        const { id, content } = args
        
        return prisma.post.update({
          where:{
            id: id
          },
          data:{
            content: content,
            updatedAt: new Date()
          }
        })
      },

      // DELETE Delete a Post (or Comment) by ID
      deletePost: (parent, args, context, info) => {
        const { id } = args

        return prisma.post.delete({
          where: {
            id: id
          }
        })
      },

    }
  
};

module.exports = resolvers;