/*
  Controller: Posts
  Handle all logic required by posts module
*/

'use strict'
const axios = require('axios')
const { shuffleArray } = require('../utils')

module.exports = config => {
  const dataSourceURL = `${config.dataSourceURL}/posts`

  const create = (data = {}) => {
    return new Promise((resolve, reject) => {
      axios.post(dataSourceURL, data)
      .then(response => resolve('success'))
      .catch(err => reject(err))
    })
  }

  const update = (id, data = {}) => {
    return new Promise((resolve, reject) => {
      axios.put(`${dataSourceURL}/${id}`, data)
        .then(response => resolve('success'))
        .catch(err => reject(err))
    })
  }

  const remove = id => {
    return new Promise((resolve, reject) => {
      axios.delete(`${dataSourceURL}/${id}`)
        .then(response => resolve('success'))
        .catch(err => reject(err))
    })
  }

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

  // Get 30 random items from the response
  const getOne = id => {
    return new Promise((resolve, reject) => {
      axios.get(`${dataSourceURL}/${id}`)
      .then(response => {
        // Ensure if the response format if valid
        if (response.data) {
          return resolve(response.data)
        }
        return reject('No data')
      })
      .catch(err => reject(err))
    })
  }

  return {
    create,
    update,
    remove,
    get,
    getOne
  }
}
