/**
 * @module resources.v1
 */

const Base = require('../../base')

/**
 * @class
 * @extends Base
 */
class Blocks extends Base {
  /**
   * Get all blocks.
   * @param  {Object} query
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
    return this.http.get('blocks/get', { id })
  }

  /**
   * Get epoch time from config.
   * @returns {Promise}
   */
  epoch () {
    return this.http.get('blocks/getEpoch')
  }

  /**
   * Get the transfer fee from config.
   * @returns {Promise}
   */
  fee () {
    return this.http.get('blocks/getFee')
  }

  /**
   * Get all fees from config.
   * @returns {Promise}
   */
  fees () {
    return this.http.get('blocks/getFees')
  }

  /**
   * Get current height.
   * @returns {Promise}
   */
  height () {
    return this.http.get('blocks/getHeight')
  }

  /**
   * Get current milestone.
   * @returns {Promise}
   */
  milestone () {
    return this.http.get('blocks/getMilestone')
  }

  /**
   * Get nethash from config.
   * @returns {Promise}
   */
  nethash () {
    return this.http.get('blocks/getNethash')
  }

  /**
   * Get reward from config.
   * @returns {Promise}
   */
  reward () {
    return this.http.get('blocks/getReward')
  }

  /**
   * Get config/status for the network.
   * @returns {Promise}
   */
  status () {
    return this.http.get('blocks/getStatus')
  }

  /**
   * Calculate network supply.
   * @returns {Promise}
   */
  supply () {
    return this.http.get('blocks/getSupply')
  }
}

module.exports = Blocks
