/**
 * @module resources.v1
 */

const Base = require('../../base')

/**
 * @class
 * @extends Base
 */
class Loader extends Base {
  /**
   * Get node status.
   * @returns {Promise}
   */
  status () {
    return this.http.get('loader/status')
  }

  /**
   * Get node syncing status.
   * @returns {Promise}
   */
  syncing () {
    return this.http.get('loader/status/sync')
  }

  /**
   * Get network configuration.
   * @returns {Promise}
   */
  configuration () {
    return this.http.get('loader/autoconfigure')
  }
}

module.exports = Loader
