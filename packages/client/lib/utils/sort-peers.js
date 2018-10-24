/**
 * @module utils
 */

const orderBy = require('lodash.orderby')

/**
 * Sorts the peers, in place, by block height and delay
 * @param {Object[]} peers
 * @returns {Object[]}
 */
const sortPeers = peers => {
  return orderBy(peers, ['height', 'delay'], ['desc', 'asc'])
}

module.exports = sortPeers
