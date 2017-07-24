import * as Chain from './Chain.info';

import { ExecuteChain } from 'fluid-chains';

export default class SubjectResource {
    constructor(resource) {
        resource.get(Chain.GET_SUBJECTS, 'subject/get-subjects', (req, res) => {
            ExecuteChain(Chain.GET_SUBJECTS, {
                query: req.query
            }, result => {
                res.status(result.status()).send(result.dto());
            });
        });
    }
}