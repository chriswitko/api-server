## API Server

[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

### Installation

- Clone this repo on your computer
- Use NPM or Yarn to install dependencies

```
# NPM
> npm install

# or with Yarn
> yarn
```

- Run tests

```
npm run test
```

- Run application

```
npm run start
```

Note: The application will run on port 3000 by default. You can modify the port and other settings in src/config folder. For port you can also use:

```
PORT=3000 npm run test
```

The same with environment:

```
NOD_ENV=development npm run test
```

### Configuration

```
const config = {
  debug: true, // enable/disable debugger (enabled in development mode by default)
  dataSourceURL: 'http://jsonplaceholder.typicode.com', // our source of data
  prefix: '/api', // setup prefix for all routes
  port: process.env.PORT || 3000, // define default port
  token: 'af24353tdsfw', // fixed bearer token
  cacheStore: require('../middlewares/stores/memory.js') // define store to enable caching
}
```

### Stack
- NodeJS V7
- ES6
- Mocha
- Chai

[![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.png)](https://github.com/feross/standard)
