import * as Chain from './Chain.info';

import { ExecuteChain } from 'fluid-chains';

export default class BookResource {
    constructor(resource) {
        resource.post(Chain.CREATE_BOOK, 'book/create', (req, res) => {
            ExecuteChain(Chain.CREATE_BOOK, {
                name: req.body.name,
                address: req.body.address,
                createdBy: req.body.createdBy,
                updatedBy: req.body.createdBy
            }, result => {
                res.status(result.status()).send(result.dto());
            });
        });
    }
}