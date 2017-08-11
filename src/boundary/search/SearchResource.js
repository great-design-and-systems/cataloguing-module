import * as Chain from './Chain.info';

import { ExecuteChain } from 'fluid-chains';

export default class SearchResource {
    constructor(resource) {
        resource.get(Chain.SEARCH_ONLINE, 'search-online/:source', (req, res) => {
            ExecuteChain(Chain.SEARCH_ONLINE, {
              source: req.params.source,
              query: req.query
            }, result => {
                res.status(result.status()).send(result.dto());
            });
        });
    }
}