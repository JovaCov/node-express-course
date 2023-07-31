const CustomAPIError= require('./custom-error')
const {StatusCodes} = require('http-status-codes')
class UndauthenticatedError extends CustomAPIError {
    constructor(message) {
      super(message)
      this.statusCode = StatusCodes.UNAUTHORIZED
    }
  }
  
  module.exports = UndauthenticatedError