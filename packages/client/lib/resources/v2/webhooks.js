/**
 * @module resources.v2
 */

const Base = require('../../base')

/**
 * @class
 * @extends Base
 */
class Webhooks extends Base {
  /**
   * Get all webhooks.
   * @returns {Promise}
   */
  all () {
    return this.http.get('webhooks')
  }

  /**
   * Create webhooks.
   * @param  {Object} payload
   * @returns {Promise}
   */
  create (payload) {
    return this.http.post('webhooks', payload)
  }

  /**
   * Get webhook by id.
   * @param  {String} id
   * @returns {Promise}
   */
  get (id) {
    return this.http.get(`webhooks/${id}`)
  }

  /**
   * Update webhook by id.
   * @param  {String} id
   * @returns {Promise}
   */
  update (id) {
    return this.http.put(`webhooks/${id}`)
  }

  /**
   * Delete webhook by id.
   * @param  {String} id
   * @returns {Promise}
   */
  delete (id) {
    return this.http.delete(`webhooks/${id}`)
  }

  /**
   * Get webhook events.
   * @returns {Promise}
   */
  events () {
    return this.http.get('webhooks/events')
  }
}

module.exports = Webhooks
