const users = [
  {
    _id: 1,
    username: 'monke',
    posts: [       
      {
        _id: 1,
        author: {
          _id: 1,
          username:"monke"
        },
        date: "21/10/2021",
        content: "content",
        comment: "comment"
      },
    
      {
        _id: 2,
        author: {
          _id: 1,
          username:"monke"
        },
        date: "21/10/2021",
        content: "content2",
        comment: "comment2"
      }
    ]

  },
  
  {
    _id: 2,
    username: 'hugo',
    posts: [       
      {
        _id: 3,
        author: {
          _id: 2,
          username:"hugo"
        },
        date: "21/10/2021",
        content: "content",
        comment: "comment"
      },
    
      {
        _id: 4,
        author: {
          _id: 2,
          username:"hugo"
        },
        date: "21/10/2021",
        content: "content2",
        comment: "comment2"
      }
    ]
    
  }, 
];

const posts = [
  {
    _id: 1,
    author: {
      _id: 1,
      username:"monke"
    },
    date: "21/10/2021",
    content: "content1",
    comment: null
  },

  {
    _id: 2,
    author: {
      _id: 1,
      username:"monke"
    },
    date: "21/10/2021",
    content: "content2",
    comment: null
  },

  {
    _id: 3,
    author: {
      _id: 2,
      username:"hugo"
    },
    date: "21/10/2021",
    content: "content3",
    comment: null
  },

  {
    _id: 4,
    author: {
      _id: 2,
      username:"hugo"
    },
    date: "21/10/2021",
    content: "content4",
    comment: null
  }
];

const comments = [
  {
    _id: 1,
    author: 2,
    date: "21/10/2021",
    content: "My comment on post 1",
    post: {
      _id: 1,
      author: {
        _id: 1,
        username:"monke"
      },
      date: "21/10/2021",
      content: "content1",     
    }
  },

  {
    _id: 2,
    author: 1,
    date: "21/10/2021",
    content: "My comment on post 2",
    post: {
      _id: 2,
      author: {
        _id: 2,
        username:"hugo"
      },
      date: "21/10/2021",
      content: "content2",     
    }
  }, 
]

module.exports = { users, posts, comments};
