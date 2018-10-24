/**
 * @module resources.v2
 */

const Base = require('../../base')

/**
 * @kind class
 * @override
 * @extends Base
 * "Node" is a global type specified in the tsd-jsdoc.
 * The annotation "kind" and "override" is required to make it work.
 */
class Node extends Base {
  /**
   * Get node status.
   * @returns {Promise}
   */
  status () {
    return this.http.get('node/status')
  }

  /**
   * Get node syncing status.
   * @returns {Promise}
   */
  syncing () {
    return this.http.get('node/syncing')
  }

  /**
   * Get node configuration.
   * @returns {Promise}
   */
  configuration () {
    return this.http.get('node/configuration')
  }
}

module.exports = Node
