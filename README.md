## API Server

[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

### Installation

- Clone this repo on your computer
- Use NPM or Yarn to install dependencies

```console
# NPM
$ npm install

# or using yarn
$ yarn
```

- Run tests

```console
$ npm run test
```

- Run application

```console
$ npm run start
```

Note: The application will run on port 3000 by default. You can modify the port and other settings in src/config folder. For port you can also use:

```console
$ PORT=3000 npm run test
```

The same with environment:

```console
$ NOD_ENV=development npm run test
```

### Configuration

Configuration files are located in src/config folder.

- development.js - for development stage
- production.js - for production environment
- mocha.js - for testing purposes


```javascript
const config = {
  // enable/disable debugger (enabled in development mode by default)
  debug: true,
  // our source of data
  dataSourceURL: 'http://jsonplaceholder.typicode.com',
  // setup prefix for all routes
  prefix: '/api',
  // define default port
  port: process.env.PORT || 3000,
  // fixed bearer token
  token: 'af24353tdsfw',
  // define store to enable caching
  cacheStore: require('../middlewares/stores/memory.js')
}
```

### Stack
- NodeJS V7
- ES6
- Mocha
- Chai

[![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.png)](https://github.com/feross/standard)
