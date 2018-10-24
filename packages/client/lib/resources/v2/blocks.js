/**
 * @module resources.v2
 */

const Base = require('../../base')

/**
 * @class
 * @extends Base
 */
class Blocks extends Base {
  /**
   * Get all blocks.
   * @param {Object} [query]
   * @returns {Promise}
   */
  all (query) {
    return this.http.get('blocks', query)
  }

  /**
   * Get block by id.
   * @param  {String} id
   * @returns {Promise}
   */
  get (id) {
    return this.http.get(`blocks/${id}`)
  }

  /**
   * Get transactions by block id.
   * @param  {String} id
   * @param {Object} [query]
   * @returns {Promise}
   */
  transactions (id, query) {
    return this.http.get(`blocks/${id}/transactions`, query)
  }

  /**
   * Search for blocks.
   * @param  {Object} payload
   * @returns {Promise}
   */
  search (payload) {
    return this.http.post('blocks/search', payload)
  }
}

module.exports = Blocks
