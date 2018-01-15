/*
  Controller: Users
  Handle all logic required by users module
*/

'use strict'
const axios = require('axios')
const { shuffleArray } = require('../utils')

module.exports = config => {
  const dataSourceURL = `${config.dataSourceURL}/users`

  // Get 30 random items from the response
  const get = _ => {
    return new Promise((resolve, reject) => {
      axios.get(dataSourceURL)
      .then(response => {
        // Ensure if the response format if valid
        if (response.data) {
          let limiter = response.data.slice(0, 30)
          limiter = shuffleArray(limiter)
          return resolve(limiter)
        }
        return reject('No data')
      })
      .catch(err => reject(err))
    })
  }

  return {
    get
  }
}
