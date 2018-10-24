/**
 * @module resources.v2
 */

const Base = require('../../base')

/**
 * @class
 * @extends Base
 */
class Statistics extends Base {
  /**
   * Get network statistics.
   * @returns {Promise}
   */
  blockchain () {
    return this.http.get('statistics/blockchain')
  }

  /**
   * Get transaction statistics.
   * @returns {Promise}
   */
  transactions () {
    return this.http.get('statistics/transactions')
  }

  /**
   * Get block statistics.
   * @returns {Promise}
   */
  blocks () {
    return this.http.get('statistics/blocks')
  }

  /**
   * Get vote statistics.
   * @returns {Promise}
   */
  votes () {
    return this.http.get('statistics/votes')
  }

  /**
   * Get unvote statistics.
   * @returns {Promise}
   */
  unvotes () {
    return this.http.get('statistics/unvotes')
  }
}

module.exports = Statistics
