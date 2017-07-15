import { Chain } from 'fluid-chains';
import { CATALOG_ERROR_HANDLER } from '../util/Chain.info';
import { GET_BOOKS } from './Chain.info';
import { Book } from '../../entity/';

const Action = (context, param, next) => {
    Book.paginate(param.query(), {
      page: param.page(),
      limit: param.limit(),
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
