const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

const resolvers = {
    Query: {
        allUsers: async () => {
          return prisma.user.findMany()
        },

        allPosts: async () => {
          return prisma.post.findMany({include: {parent: true, comments : true, author: true}})
        },

        getUser: async (parent, args, context, info) => {
          const { id } = args
          return prisma.user.findUnique({where: {id:id}})   
        },

        getPost: async (parent, args, context, info) => {
            const { id } = args
            return prisma.post.findUnique({where: {id:id}}, {include: {parent: true, comments : true, author: true}})    
        },

        getComments: async (parent, args, context, info) => {
          // Get Comments By Post ID
          const { id } = args
          return prisma.post.findMany({where: {post_id: id}, include: {parent: true, comments : true, author: true}})    
        },
    },

    
    Mutation: {
      createPost: (parent, args, context, info) => {
        const { content } = args

        return prisma.post.create({
          data: {
            author_id: 1,
            content: content,
          },
        })
      },

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