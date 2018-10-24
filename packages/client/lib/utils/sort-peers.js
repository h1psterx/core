/**
 * @module utils
 */

const orderBy = require('lodash.orderby')

/**
 * Sorts the peers, in place, by block height and delay
 * @param {Object[]} peers
 * @returns {Object[]}
 */
const sortPeers = peers => orderBy(peers, [
  'height', peers[0].latency ? 'latency' : 'delay'
], ['desc', 'asc'])

module.exports = sortPeers
