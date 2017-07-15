import * as Chain from './Chain.info';

import { ExecuteChain } from 'fluid-chains';

export default class BookResource {
    constructor(resource) {
        resource.post(Chain.CREATE_BOOK, 'book/create', (req, res) => {
            ExecuteChain(Chain.CREATE_BOOK, {
              bookData: req.body
            }, result => {
                res.status(result.status()).send(result.dto());
            });
        });

        resource.put(Chain.UPDATE_BOOK, 'book/update/:bookId', (req, res) => {
            ExecuteChain(Chain.UPDATE_BOOK, {
                bookId: req.params.bookId,
                inputData: req.body
            }, result => {
                res.status(result.status()).send(result.dto());
            });
        });

        resource.delete(Chain.DELETE_BOOK, 'book/delete/:bookId', (req, res) => {
            ExecuteChain(Chain.DELETE_BOOK, {
                bookId: req.params.bookId
            }, result => {
                res.status(result.status()).send(result.dto());
            });
        });

        resource.get(Chain.GET_BOOKS, 'book/get-books', (req, res) => {
            ExecuteChain(Chain.GET_BOOKS, {
                query: req.query
            }, result => {
                res.status(result.status()).send(result.dto());
            });
        });
    }
}