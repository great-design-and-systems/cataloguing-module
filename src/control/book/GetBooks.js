import { Chain } from 'fluid-chains';
import { CATALOG_ERROR_HANDLER } from '../util/Chain.info';
import { GET_BOOKS } from './Chain.info';
import { Book } from '../../entity/';

const Action = (context, param, next) => {
    const query = param.query ? param.query() : {};
    const page = param.page();
    const limit = param.limit();
    Book.paginate(query, {
      page: page ? parseInt(page) : 1,
      limit: limit ? parseInt(limit) : 10,
      sort: param.sort()
    }, (err, result) => {
        context.set('books', result);
        next(err);
    });
}

const GetBooks = new Chain(GET_BOOKS, Action,
    undefined, CATALOG_ERROR_HANDLER);

GetBooks.addSpec('query', true);
GetBooks.addSpec('page', false);
GetBooks.addSpec('limit', false);
GetBooks.addSpec('sort', false);
