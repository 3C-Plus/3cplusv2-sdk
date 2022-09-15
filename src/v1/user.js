class UserEndpoints {
  /**
   * User endpoints for the 3cplus api.
   * @param {object} client - HTTP client instance.
   */
  constructor (client) {
    this.client = client
  }

  /**
   * User profile information.
   * @returns {Promise}
   */
  me (data = {}) {
    return this.client.get('/me', data)
  }

  /**
   * Authenticate a user.
   * @returns {Promise}
   */
  authenticate (data) {
    return this.client.post('/authenticate', data)
  }

  /**
   * Authenticate a user in webphone mode.
   * @returns {Promise}
   */
  webphoneAuthenticate (data) {
    return this.client.post('/webphone-authenticate', data)
  }
}

module.exports = UserEndpoints
