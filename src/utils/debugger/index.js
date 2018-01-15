/*
  Utils / Debugger
  Simple debugger to catch all console.log and console.err
*/
'use strict'

const Debugger = (config) => {
  return {
    log: (...args) => {
      if (config.debug) {
        args = ['DEBUG', ...args]
        console.log.apply(this, args)
      }
    },
    error: (...args) => {
      args = ['DEBUG', ...args]
      console.error.apply(this, args)
    }
  }
}

module.exports = Debugger
