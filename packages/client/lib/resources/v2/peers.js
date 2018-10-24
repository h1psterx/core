/**
 * @module resources.v2
 */

const Base = require('../../base')

/**
 * @class
 * @extends Base
 */
class Peers extends Base {
  /**
   * Get all peers.
   * @param {Object} [query]
   * @returns {Promise}
   */
  all (query) {
    return this.http.get('peers', query)
  }

  /**
   * Get peer by ip.
   * @param  {String} ip
   * @returns {Promise}
   */
  get (ip) {
    return this.http.get(`peers/${ip}`)
  }
}

module.exports = Peers
