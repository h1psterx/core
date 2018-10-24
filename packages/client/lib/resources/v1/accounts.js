/**
 * @module resources.v1
 */

const Base = require('../../base')

/**
 * @class
 * @extends Base
 */
class Wallets extends Base {
  /**
   * Get all wallets.
   * @param  {Object} query
   * @returns {Promise}
   */
  all (query) {
    return this.http.get('accounts/getAllAccounts', query)
  }

  /**
   * Get a wallet by address.
   * @param  {String} address
   * @returns {Promise}
   */
  get (address) {
    return this.http.get('accounts', { address })
  }

  /**
   * Count how many wallets there are.
   * @returns {Promise}
   */
  count () {
    return this.http.get('accounts/count')
  }

  /**
   * Get deletate by address.
   * @param  {String} address
   * @returns {Promise}
   */
  delegates (address) {
    return this.http.get('accounts/delegates', { address })
  }

  /**
   * Get delegate fees.
   * @returns {Promise}
   */
  fee () {
    return this.http.get('accounts/delegates/fee')
  }

  /**
   * Get wallet balance by Address.
   * @param  {String} address
   * @returns {Promise}
   */
  balance (address) {
    return this.http.get('accounts/getBalance', { address })
  }

  /**
   * Get wallet public key by Address.
   * @param  {String} address
   * @returns {Promise}
   */
  publicKey (address) {
    return this.http.get('accounts/getPublicKey', { address })
  }

  /**
   * Get the top wallets.
   * @param  {Object} query
   * @returns {Promise}
   */
  top (query) {
    return this.http.get('accounts/top', query)
  }
}

module.exports = Wallets
