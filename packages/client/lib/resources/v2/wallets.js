/**
 * @module resources.v2
 */

const Base = require('../../base')

/**
 * @class
 * @extends Base
 */
class Wallets extends Base {
  /**
   * Get all wallets.
   * @param {Object} [query]
   * @returns {Promise}
   */
  all (query) {
    return this.http.get('wallets', query)
  }

  /**
   * Get top wallets.
   * @param {Object} [query]
   * @returns {Promise}
   */
  top (query) {
    return this.http.get('wallets/top', query)
  }

  /**
   * Get wallet by id.
   * @param  {String} id
   * @returns {Promise}
   */
  get (id) {
    return this.http.get(`wallets/${id}`)
  }

  /**
   * Get transactions by wallet id.
   * @param  {String} id
   * @param {Object} [query]
   * @returns {Promise}
   */
  transactions (id, query) {
    return this.http.get(`wallets/${id}/transactions`, query)
  }

  /**
   * Get sent transactions by wallet id.
   * @param  {String} id
   * @param {Object} [query]
   * @returns {Promise}
   */
  transactionsSent (id, query) {
    return this.http.get(`wallets/${id}/transactions/sent`, query)
  }

  /**
   * Get received transactions by wallet id.
   * @param  {String} id
   * @param {Object} [query]
   * @returns {Promise}
   */
  transactionsReceived (id, query) {
    return this.http.get(`wallets/${id}/transactions/received`, query)
  }

  /**
   * Get votes by wallet id.
   * @param  {String} id
   * @returns {Promise}
   */
  votes (id) {
    return this.http.get(`wallets/${id}/votes`)
  }

  /**
   * Search for wallets.
   * @param  {Object} payload
   * @returns {Promise}
   */
  search (payload) {
    return this.http.post('wallets/search', payload)
  }
}

module.exports = Wallets
