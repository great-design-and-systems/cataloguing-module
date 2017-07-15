import { CREATE_BOOK } from './Chain.info';
import { Chain } from 'fluid-chains';
import { CATALOG_ERROR_HANDLER } from '../util/Chain.info';
import { Book } from '../../entity/';

const Action = (context, param, next) => {
    Book.create({
      title : param.title(),
      statementOfResponsibility: param.statementOfResponsibility(),
      seriesTitle: param.seriesTitle(),
      isbn: param.isbn(),
      publisher: param.publisher(),
      numberOfPages: param.numberOfPages(),
      subTitle: param.subTitle(),
      edition: param.edition(),
      author: param.author(),
      subject: param.subject(),
      lccn: param.lccn(),
      publishedDate: param.publishedDate(),
      summary: param.summary(),
      studyProgram: param.studyProgram(),
      titlePoints: param.titlePoints(),
      internetResource: param.internetResource(),
      generalNote: param.generalNote(),
      readingLevel: param.readingLevel(),
      resourceType: param.resourceType(),
      barcode: param.barcode(),
      location: param.location(),
      cost: param.cost(),
      vendor: param.vendor(),
      copyDate: param.copyDate(),
      callNumber: param.callNumber(),
      format: param.format(),
      currency: param.currency(),
      fund: param.fund()
    }, (err, result) => {
        context.set('bookId', result._id);
        next(err);
    });
}

const CreateBook = new Chain(CREATE_BOOK,
    Action, undefined, CATALOG_ERROR_HANDLER);

CreateBook.addSpec('title', true);
CreateBook.addSpec('statementOfResponsibility', false);
CreateBook.addSpec('seriesTitle', false);
CreateBook.addSpec('isbn', false);
CreateBook.addSpec('publisher', false);
CreateBook.addSpec('numberOfPages', false);
CreateBook.addSpec('subTitle', false);
CreateBook.addSpec('edition', false);
CreateBook.addSpec('author', true);
CreateBook.addSpec('subject', false);
CreateBook.addSpec('lccn', false);
CreateBook.addSpec('publishedDate', false);
CreateBook.addSpec('summary', false);
CreateBook.addSpec('studyProgram', false);
CreateBook.addSpec('titlePoints', false);
CreateBook.addSpec('internetResource', false);
CreateBook.addSpec('generalNote', false);
CreateBook.addSpec('readingLevel', false);
CreateBook.addSpec('resourceType', false);
CreateBook.addSpec('barcode', false);
CreateBook.addSpec('location', false);
CreateBook.addSpec('cost', false);
CreateBook.addSpec('vendor', false);
CreateBook.addSpec('copyDate', false);
CreateBook.addSpec('callNumber', false);
CreateBook.addSpec('format', false);
CreateBook.addSpec('currency', false);
CreateBook.addSpec('fund', false);