# learn.graphql - Hugo SINPRASITH

## Infos

### Comments Modeling
For the Comment modeling, I decided to consider a Comment as a Post with a parent Post ID. Actually, a normal Post won't have a parent whereas a Comment will have a Post List in the parent field and a parent Post ID.  

Since a Comment is just a Post with a parent Post ID, the update and delete mutations are the same as Post's. Only the create mutation is different because we specify a parent Post ID during the process.

### Database
The database used is a SQLite database. The DB file is available in the prisma folder.

### ! Important !
If the GraphQL date package won't install, try to use `npm install --force` when installing.