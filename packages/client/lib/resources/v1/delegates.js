/**
 * @module resources.v1
 */

const Base = require('../../base')

/**
 * @class
 * @extends Base
 */
class Delegates extends Base {
  /**
   * Get all delegates.
   * @param  {Object} query
   * @returns {Promise}
   */
  all (query) {
    return this.http.get('delegates', query)
  }

  /**
   * Get delegate by id.
   * @param  {String} id
   * @returns {Promise}
   */
  get (id) {
    return this.http.get('delegates/get', { id })
  }

  /**
   * Get quantity of delegates.
   * @returns {Promise}
   */
  count () {
    return this.http.get('delegates/count')
  }

  /**
   * Get delegate fee.
   * @returns {Promise}
   */
  fee () {
    return this.http.get('delegates/fee')
  }

  /**
   * Get delegate forged data by public key.
   * @param  {String} generatorPublicKey
   * @returns {Promise}
   */
  forged (generatorPublicKey) {
    return this.http.get('delegates/forging/getForgedByAccount', { generatorPublicKey })
  }

  /**
   * Search for delegates.
   * @param  {Object} query
   * @param  {String} query.q
   * @param  {Number} query.limit
   * @returns {Promise}
   */
  search (query) {
    return this.http.get('delegates/search', query)
  }

  /**
   * Get voters for delegate.
   * @param  {String} publicKey
   * @returns {Promise}
   */
  voters (publicKey) {
    return this.http.get('delegates/voters', { publicKey })
  }
}

module.exports = Delegates
