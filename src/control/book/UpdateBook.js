import { Chain } from 'fluid-chains';
import { CATALOG_ERROR_HANDLER } from '../util/Chain.info';
import { UPDATE_BOOK } from './Chain.info';
import { Book } from '../../entity/';

const Action = (context, param, next) => {
    Book.update({ _id: param.bookId() }, param.inputData(), (err, result) => {
      context.set('updateBook', result);
       next(err);
    });
}

const UpdateBook = new Chain(UPDATE_BOOK, Action,
    undefined, CATALOG_ERROR_HANDLER);

UpdateBook.addSpec('bookId', true);
UpdateBook.addSpec('inputData', true);