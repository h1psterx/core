/**
 * @module resources.v2
 */

const Base = require('../../base')

/**
 * @class
 * @extends Base
 */
class Votes extends Base {
  /**
   * Get all votes.
   * @param {Object} [query]
   * @returns {Promise}
   */
  all (query) {
    return this.http.get('votes', query)
  }

  /**
   * Get vote by id.
   * @param  {String} id
   * @returns {Promise}
   */
  get (id) {
    return this.http.get(`votes/${id}`)
  }
}

module.exports = Votes
