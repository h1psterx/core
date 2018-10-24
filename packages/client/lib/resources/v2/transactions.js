/**
 * @module resources.v2
 */

const Base = require('../../base')

/**
 * @class
 * @extends Base
 */
class Transactions extends Base {
  /**
   * Get all transactions.
   * @param {Object} [query]
   * @returns {Promise}
   */
  all (query) {
    return this.http.get('transactions', query)
  }

  /**
   * Push transactions to the blockchain.
   * @param  {Object} payload
   * @returns {Promise}
   */
  create (payload) {
    return this.http.post('transactions', payload)
  }

  /**
   * Get transaction by id.
   * @param  {String} id
   * @returns {Promise}
   */
  get (id) {
    return this.http.get(`transactions/${id}`)
  }

  /**
   * Get all unconfirmed transactions.
   * @param {Object} [query]
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
    return this.http.get(`transactions/unconfirmed/${id}`)
  }

  /**
   * Search for transactions.
   * @param  {Object} payload
   * @returns {Promise}
   */
  search (payload) {
    return this.http.post('transactions/search', payload)
  }

  /**
   * Get transaction types.
   * @returns {Promise}
   */
  types () {
    return this.http.get('transactions/types')
  }
}

module.exports = Transactions
