# MERN_Project

## clone or download
```terminal
$ npm i
```

# Usage (run fullstack app on your computer)

## Prerequisites
- [MongoDB](https://gist.github.com/nrollr/9f523ae17ecdbb50311980503409aeb3)
- [Node](https://nodejs.org/en/download/) ^10.0.0
- [npm](https://nodejs.org/en/download/package-manager/)

notice, you need client and server runs concurrently in different terminal session, in order to make them talk to each other

## Client-side usage(PORT: 3000)
```terminal
$ cd client          // go to client folder
$ npm i    // npm install packages
$ npm start        // run it locally
```

## Server-side usage(PORT: 8050)

### Prepare your secret

run the script at the first level:

(You need to add a conn.js to connect to MongoDB)

```terminal
// in the root level
$ cd server
```

### Start

```terminal
$ cd server   // go to server folder
$ npm i       // npm install packages
$ npm run dev // run it locally
```
