/**
 * @constructor
 * @param {String} host
 * @param {Number} [version=1] - API version
 * @returns {void}
 */
declare class ApiClient {
    constructor(host: string, version?: number);

    /**
     * Finds all the available peers, sorted by block height and delay
     * @param {String}    network - Network name ('devnet' or 'mainnet')
     * @param {Number}    [version=1] - API version
     * @param {Object[]}  [peersOverride] - List of peers to use instead of initialPeers
     * @returns {Object[]}
     */
    static findPeers(network: string, version?: number, peersOverride?: any[]): any[];

    /**
     * Connects to a random peer of the network
     * @param {String}     network - Network name
     * @param {Number}     version - API version
     * @param {Number}     peersOverride - List of peers to use instead of initialPeers
     * @returns {ApiClient}
     */
    static connect(network: string, version: number, peersOverride: number): ApiClient;

    /**
     * Create a HTTP connection to the API.
     * @param {String} host
     * @returns {void}
     */
    setConnection(host: string): void;

    /**
     * Get the HTTP connection to the API.
     * @returns {HttpClient}
     */
    getConnection(): HttpClient;

    /**
     * Set the API Version.
     * @param {Number}     version
     * @returns {ApiClient}
     */
    setVersion(version: number): ApiClient;

    /**
     * Create an instance of a version specific resource.
     * @param  {String}   name
     * @returns {Object}
     */
    resource(name: string): any;

}

/**
 * @constructor
 * @param {HttpClient} http
 */
declare class Base {
    constructor(http: HttpClient);

}

/**
 * @constructor
 * @param  {String} host
 * @param  {Number} [apiVersion=1]
 */
declare class HttpClient {
    constructor(host: string, apiVersion?: number);

    /**
     * Used to specify the API Version.
     * @param {Number} version
     */
    setVersion(version: number): void;

    /**
     * Establish the headers of the requests.
     * @param {Object} headers
     */
    setHeaders(headers: any): void;

    /**
     * Establish the timeout of the requests.
     * @param {Number} timeout
     */
    setTimeout(timeout: number): void;

    /**
     * Perform a HTTP GET request.
     * @param  {String} path
     * @param  {Object} params
     * @returns {Promise}
     */
    get(path: string, params: any): Promise;

    /**
     * Perform a HTTP POST request.
     * @param  {String} path
     * @param  {Object} data
     * @returns {Promise}
     */
    post(path: string, data: any): Promise;

    /**
     * Perform a HTTP PUT request.
     * @param  {String} path
     * @param  {Object} data
     * @returns {Promise}
     */
    put(path: string, data: any): Promise;

    /**
     * Perform a HTTP PATCH request.
     * @param  {String} path
     * @param  {Object} data
     * @returns {Promise}
     */
    patch(path: string, data: any): Promise;

    /**
     * Perform a HTTP DELETE request.
     * @param  {String} path
     * @param  {Object} params
     * @returns {Promise}
     */
    delete(path: string, params: any): Promise;

    /**
     * Performs a request using the headers that are expected by the network.
     * @param  {String} method
     * @param  {String} path
     * @param  {Object} payload
     * @returns {Promise}
     * @throws Will throw an error if the HTTP request fails.
     */
    sendRequest(method: string, path: string, payload: any): Promise;

}

/**
 * @namespace resources
 */
declare namespace resources {
    /**
     * @module resources.v1
     */
    namespace v1 {
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
            all(query: any): Promise;

            /**
             * Get a wallet by address.
             * @param  {String} address
             * @returns {Promise}
             */
            get(address: string): Promise;

            /**
             * Count how many wallets there are.
             * @returns {Promise}
             */
            count(): Promise;

            /**
             * Get deletate by address.
             * @param  {String} address
             * @returns {Promise}
             */
            delegates(address: string): Promise;

            /**
             * Get delegate fees.
             * @returns {Promise}
             */
            fee(): Promise;

            /**
             * Get wallet balance by Address.
             * @param  {String} address
             * @returns {Promise}
             */
            balance(address: string): Promise;

            /**
             * Get wallet public key by Address.
             * @param  {String} address
             * @returns {Promise}
             */
            publicKey(address: string): Promise;

            /**
             * Get the top wallets.
             * @param  {Object} query
             * @returns {Promise}
             */
            top(query: any): Promise;

        }

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
            all(query: any): Promise;

            /**
             * Get block by id.
             * @param  {String} id
             * @returns {Promise}
             */
            get(id: string): Promise;

            /**
             * Get epoch time from config.
             * @returns {Promise}
             */
            epoch(): Promise;

            /**
             * Get the transfer fee from config.
             * @returns {Promise}
             */
            fee(): Promise;

            /**
             * Get all fees from config.
             * @returns {Promise}
             */
            fees(): Promise;

            /**
             * Get current height.
             * @returns {Promise}
             */
            height(): Promise;

            /**
             * Get current milestone.
             * @returns {Promise}
             */
            milestone(): Promise;

            /**
             * Get nethash from config.
             * @returns {Promise}
             */
            nethash(): Promise;

            /**
             * Get reward from config.
             * @returns {Promise}
             */
            reward(): Promise;

            /**
             * Get config/status for the network.
             * @returns {Promise}
             */
            status(): Promise;

            /**
             * Calculate network supply.
             * @returns {Promise}
             */
            supply(): Promise;

        }

        /**
         * @class
         * @extends Base
         */
        class Delegates extends Base {
            /**
             * Get all delegates.
             * @param  {Object} query
             * @returns {Promise}
             */
            all(query: any): Promise;

            /**
             * Get delegate by id.
             * @param  {String} id
             * @returns {Promise}
             */
            get(id: string): Promise;

            /**
             * Get quantity of delegates.
             * @returns {Promise}
             */
            count(): Promise;

            /**
             * Get delegate fee.
             * @returns {Promise}
             */
            fee(): Promise;

            /**
             * Get delegate forged data by public key.
             * @param  {String} generatorPublicKey
             * @returns {Promise}
             */
            forged(generatorPublicKey: string): Promise;

            /**
             * Search for delegates.
             * @param  {Object} query
             * @param  {String} query.q
             * @param  {Number} query.limit
             * @returns {Promise}
             */
            search(query: {
                q: string;
                limit: number;
            }): Promise;

            /**
             * Get voters for delegate.
             * @param  {String} publicKey
             * @returns {Promise}
             */
            voters(publicKey: string): Promise;

        }

        /**
         * @class
         * @extends Base
         */
        class Loader extends Base {
            /**
             * Get node status.
             * @returns {Promise}
             */
            status(): Promise;

            /**
             * Get node syncing status.
             * @returns {Promise}
             */
            syncing(): Promise;

            /**
             * Get network configuration.
             * @returns {Promise}
             */
            configuration(): Promise;

        }

        /**
         * @class
         * @extends Base
         */
        class Peers extends Base {
            /**
             * Get all peers.
             * @param  {Object} query
             * @returns {Promise}
             */
            all(query: any): Promise;

            /**
             * Get peer by IP and Port.
             * @param  {String} ip
             * @param  {Number} port
             * @returns {Promise}
             */
            get(ip: string, port: number): Promise;

            /**
             * Get peer version.
             * @returns {Promise}
             */
            version(): Promise;

        }

        /**
         * @class
         * @extends Base
         */
        class Signatures extends Base {
            /**
             * Get signature fee.
             * @returns {Promise}
             */
            fee(): Promise;

        }

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
            all(query: any): Promise;

            /**
             * Get transaction by id.
             * @param  {String} id
             * @returns {Promise}
             */
            get(id: string): Promise;

            /**
             * Get all unconfirmed transactions.
             * @param  {Object} query
             * @returns {Promise}
             */
            allUnconfirmed(query: any): Promise;

            /**
             * Get unconfirmed transaction by id.
             * @param  {String} id
             * @returns {Promise}
             */
            getUnconfirmed(id: string): Promise;

        }

    }

    /**
     * @module resources.v2
     */
    namespace v2 {
        /**
         * @class
         * @extends Base
         */
        class Blocks extends Base {
            /**
             * Get all blocks.
             * @param {Object} [query]
             * @returns {Promise}
             */
            all(query?: any): Promise;

            /**
             * Get block by id.
             * @param  {String} id
             * @returns {Promise}
             */
            get(id: string): Promise;

            /**
             * Get transactions by block id.
             * @param  {String} id
             * @param {Object} [query]
             * @returns {Promise}
             */
            transactions(id: string, query?: any): Promise;

            /**
             * Search for blocks.
             * @param  {Object} payload
             * @returns {Promise}
             */
            search(payload: any): Promise;

        }

        /**
         * @class
         * @extends Base
         * dasdas
         */
        class Delegates extends Base {
            /**
             * Get all delegates.
             * @param {Object} [query]
             * @returns {Promise}
             */
            all(query?: any): Promise;

            /**
             * Get delegate by id.
             * @param  {String} id
             * @returns {Promise}
             */
            get(id: string): Promise;

            /**
             * Get blocks forged by delegate id.
             * @param  {String} id
             * @param {Object} [query]
             * @returns {Promise}
             */
            blocks(id: string, query?: any): Promise;

            /**
             * Get voters by delegate id.
             * @param  {String} id
             * @param {Object} [query]
             * @returns {Promise}
             */
            voters(id: string, query?: any): Promise;

        }

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
            status(): Promise;

            /**
             * Get node syncing status.
             * @returns {Promise}
             */
            syncing(): Promise;

            /**
             * Get node configuration.
             * @returns {Promise}
             */
            configuration(): Promise;

        }

        /**
         * @class
         * @extends Base
         */
        class Peers extends Base {
            /**
             * Get all peers.
             * @param {Object} [query]
             * @returns {Promise}
             */
            all(query?: any): Promise;

            /**
             * Get peer by ip.
             * @param  {String} ip
             * @returns {Promise}
             */
            get(ip: string): Promise;

        }

        /**
         * @class
         * @extends Base
         */
        class Statistics extends Base {
            /**
             * Get network statistics.
             * @returns {Promise}
             */
            blockchain(): Promise;

            /**
             * Get transaction statistics.
             * @returns {Promise}
             */
            transactions(): Promise;

            /**
             * Get block statistics.
             * @returns {Promise}
             */
            blocks(): Promise;

            /**
             * Get vote statistics.
             * @returns {Promise}
             */
            votes(): Promise;

            /**
             * Get unvote statistics.
             * @returns {Promise}
             */
            unvotes(): Promise;

        }

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
            all(query?: any): Promise;

            /**
             * Push transactions to the blockchain.
             * @param  {Object} payload
             * @returns {Promise}
             */
            create(payload: any): Promise;

            /**
             * Get transaction by id.
             * @param  {String} id
             * @returns {Promise}
             */
            get(id: string): Promise;

            /**
             * Get all unconfirmed transactions.
             * @param {Object} [query]
             * @returns {Promise}
             */
            allUnconfirmed(query?: any): Promise;

            /**
             * Get unconfirmed transaction by id.
             * @param  {String} id
             * @returns {Promise}
             */
            getUnconfirmed(id: string): Promise;

            /**
             * Search for transactions.
             * @param  {Object} payload
             * @returns {Promise}
             */
            search(payload: any): Promise;

            /**
             * Get transaction types.
             * @returns {Promise}
             */
            types(): Promise;

        }

        /**
         * @class
         * @extends Base
         */
        class Votes extends Base {
            /**
             * Get all votes.
             * @param {Object} [query]
             * @returns {Promise}
             */
            all(query?: any): Promise;

            /**
             * Get vote by id.
             * @param  {String} id
             * @returns {Promise}
             */
            get(id: string): Promise;

        }

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
            all(query?: any): Promise;

            /**
             * Get top wallets.
             * @param {Object} [query]
             * @returns {Promise}
             */
            top(query?: any): Promise;

            /**
             * Get wallet by id.
             * @param  {String} id
             * @returns {Promise}
             */
            get(id: string): Promise;

            /**
             * Get transactions by wallet id.
             * @param  {String} id
             * @param {Object} [query]
             * @returns {Promise}
             */
            transactions(id: string, query?: any): Promise;

            /**
             * Get sent transactions by wallet id.
             * @param  {String} id
             * @param {Object} [query]
             * @returns {Promise}
             */
            transactionsSent(id: string, query?: any): Promise;

            /**
             * Get received transactions by wallet id.
             * @param  {String} id
             * @param {Object} [query]
             * @returns {Promise}
             */
            transactionsReceived(id: string, query?: any): Promise;

            /**
             * Get votes by wallet id.
             * @param  {String} id
             * @returns {Promise}
             */
            votes(id: string): Promise;

            /**
             * Search for wallets.
             * @param  {Object} payload
             * @returns {Promise}
             */
            search(payload: any): Promise;

        }

        /**
         * @class
         * @extends Base
         */
        class Webhooks extends Base {
            /**
             * Get all webhooks.
             * @returns {Promise}
             */
            all(): Promise;

            /**
             * Create webhooks.
             * @param  {Object} payload
             * @returns {Promise}
             */
            create(payload: any): Promise;

            /**
             * Get webhook by id.
             * @param  {String} id
             * @returns {Promise}
             */
            get(id: string): Promise;

            /**
             * Update webhook by id.
             * @param  {String} id
             * @returns {Promise}
             */
            update(id: string): Promise;

            /**
             * Delete webhook by id.
             * @param  {String} id
             * @returns {Promise}
             */
            delete(id: string): Promise;

            /**
             * Get webhook events.
             * @returns {Promise}
             */
            events(): Promise;

        }

    }

}

/**
 * @module utils
 */
declare namespace utils {
    /**
     * Sorts the peers, in place, by block height and delay
     * @param {Object[]} peers
     * @returns {Object[]}
     */
    function sortPeers(peers: any[]): any[];

}


