/**
 * @module resources.v1
 */

 const Base = require('../../base')

/**
 * @class
 * @extends Base
 */
class Signatures extends Base {
  /**
   * Get signature fee.
   * @returns {Promise}
   */
  fee () {
    return this.http.get('signatures/fee')
  }
}

module.exports = Signatures
