/*
  Middlewares / Stores / Memory
  Simple static implementation for memory store, which can be used for cache and throttling middlewares
*/

'use strict'

module.exports = config => {
  const debug = require('../../utils/debugger')(config)

  const get = key => {
    debug.log(`Checking cache for key: ${key}`)
    return [
      {
        'userId': 3,
        'id': 23,
        'title': 'maxime id vitae nihil numquam',
        'body': 'veritatis unde neque eligendi\nquae quod architecto quo neque vitae\nest illo sit tempora doloremque fugit quod\net et vel beatae sequi ullam sed tenetur perspiciatis'
      }
    ]
  }

  const set = (key, val) => debug.log(`Saving cache for key: ${key}`)

  return {
    get,
    set
  }
}
