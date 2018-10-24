/**
 * @module resources.v1
 */

const Base = require('../../base')

/**
 * @class
 * @extends Base
 */
class Peers extends Base {
  /**
   * Get all peers.
   * @param  {Object} query
   * @returns {Promise}
   */
  all (query) {
    return this.http.get('peers', query)
  }

  /**
   * Get peer by IP and Port.
   * @param  {String} ip
   * @param  {Number} port
   * @returns {Promise}
   */
  get (ip, port) {
    return this.http.get('peers/get', { ip, port })
  }

  /**
   * Get peer version.
   * @returns {Promise}
   */
  version () {
    return this.http.get('peers/version')
  }
}

module.exports = Peers
