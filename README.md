# Device List - Test web app
### [Demo](https://www.youtube.com/watch?v=E34cw9zG5-Q)

## Quick start
```bash
git clone https://github.com/CavidM/device-list
```
```bash
docker-compose up --build
```
Application starts on port 3000. Change the code to see the result without rerunning commands.

#
Application uses socket session based authentication to avoid sending message to the same user by identifying users with socket.id
[JWT](https://jwt.io/), # [Socket.IO](https://socket.io/)

[Apollo client](https://www.apollographql.com/docs/react) used to talk with graphql server and manage async state.


For client side state management uses [ReduxToolkit](https://redux-toolkit.js.org/)


The server app has a multi tier architecture with Request controller, Business logic layer and Data access layer with Entities and Repositories [TypeORM](https://typeorm.io/)
