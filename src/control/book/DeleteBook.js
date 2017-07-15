import { Chain } from 'fluid-chains';
import { CATALOG_ERROR_HANDLER } from '../util/Chain.info';
import { DELETE_BOOK } from './Chain.info';
import { Book } from '../../entity/';

const Action = (context, param, next) => {
    Book.findByIdAndRemove(param.bookId(), err => {
        next(err);
    });
}

const DeleteBook = new Chain(DELETE_BOOK, Action,
    undefined, CATALOG_ERROR_HANDLER);

DeleteBook.addSpec('bookId', true);