/**
 * @module resources.v2
 */

const Base = require('../../base')

/**
 * @class
 * @extends Base
 * dasdas
 */
class Delegates extends Base {
  /**
   * Get all delegates.
   * @param {Object} [query]
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
    return this.http.get(`delegates/${id}`)
  }

  /**
   * Get blocks forged by delegate id.
   * @param  {String} id
   * @param {Object} [query]
   * @returns {Promise}
   */
  blocks (id, query) {
    return this.http.get(`delegates/${id}/blocks`, query)
  }

  /**
   * Get voters by delegate id.
   * @param  {String} id
   * @param {Object} [query]
   * @returns {Promise}
   */
  voters (id, query) {
    return this.http.get(`delegates/${id}/voters`, query)
  }
}

module.exports = Delegates
