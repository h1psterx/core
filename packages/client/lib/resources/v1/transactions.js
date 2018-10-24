/**
 * @module resources.v1
 */

const Base = require('../../base')

/**
 * @class
 * @extends Base
 */
class Transactions extends Base {
  /**
   * Get all transactions.
   * @param  {Object} query
   * @returns {Promise}
   */
  all (query) {
    return this.http.get('transactions', query)
  }

  /**
   * Get transaction by id.
   * @param  {String} id
   * @returns {Promise}
   */
  get (id) {
    return this.http.get('transactions/get', { id })
  }

  /**
   * Get all unconfirmed transactions.
   * @param  {Object} query
   * @returns {Promise}
   */
  allUnconfirmed (query) {
    return this.http.get('transactions/unconfirmed', query)
  }

  /**
   * Get unconfirmed transaction by id.
   * @param  {String} id
   * @returns {Promise}
   */
  getUnconfirmed (id) {
    return this.http.get('transactions/unconfirmed/get', { id })
  }
}

module.exports = Transactions
