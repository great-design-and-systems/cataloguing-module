import { CREATE_BOOK, UPDATE_BOOK, DELETE_BOOK, GET_BOOKS } from './Chain.info';
import { Chain, ExecuteChain } from 'fluid-chains';
import { GDSDomainDTO } from 'gds-stack';
import { Book, Subject, Util } from '../../control/';
import * as Entity from '../../entity/';

const createBookChain = new Chain(CREATE_BOOK, (context, param, next) => {
  const book = param.bookData();
  // Save Subject
  if (book.subject) {
    book.subject.forEach(subject => {
      var subjectArr = subject.split(/(\$.)/);
      console.log(subjectArr);
      var data = {};
      for (var i=0; i<subjectArr.length; i++) {
        if (subjectArr[i].includes('$')) {
          data.field = subjectArr[i];
          data.value = subjectArr[++i];
          console.log(data);
          ExecuteChain(Subject.CREATE_SUBJECT, {
            subjectField: data.field,
            subjectValue: data.value,
          }, result => {
            console.log(result.subjectId());
          });
          
        }
      }
    });
  }
  // Save Book
  ExecuteChain(Book.CREATE_BOOK, {
      title : book.title,
      statementOfResponsibility: book.statementOfResponsibility,
      seriesTitle: book.seriesTitle,
      isbn: book.isbn,
      publisher: book.publisher,
      numberOfPages: book.numberOfPages,
      subTitle: book.subTitle,
      edition: book.edition,
      author: book.author,
      subject: book.subject,
      lccn: book.lccn,
      publishedDate: book.publishedDate,
      summary: book.summary,
      studyProgram: book.studyProgram,
      titlePoints: book.titlePoints,
      internetResource: book.internetResource,
      generalNote: book.generalNote,
      readingLevel: book.readingLevel,
      resourceType: book.resourceType,
      barcode: book.barcode,
      location: book.location,
      cost: book.cost,
      vendor: book.vendor,
      copyDate: book.copyDate,
      callNumber: book.callNumber,
      format: book.format,
      currency: book.currency,
      fund: book.fund
  }, result => {
    if (result.$err) {
      context.set('status', 500);
      context.set('dto', new GDSDomainDTO('ERROR_' + CREATE_BOOK, result.$errorMessage()));
      next();
    } else {
      context.set('status', 200);
      context.set('dto', new GDSDomainDTO(CREATE_BOOK, {
        bookId: result.bookId()
      }));
      next();
    }
  });
});
createBookChain.addSpec('bookData', true);

const getBooksChain = new Chain(GET_BOOKS, (context, param, next) => {
  const query = param.query ? param.query() : {};
  const page = query.page;
  const limit = query.limit;
  const sort = query.sort;
  delete query.page;
  delete query.limit;
  delete query.sort;
  ExecuteChain(Book.GET_BOOKS, {
    query: query,
    page: page,
    limit: limit,
    sort: sort
  }, result => {
    if (result.$err) {
      context.set('status', 500);
      context.set('dto', new GDSDomainDTO('ERROR_' + GET_BOOKS, result.$errorMessage()));
      next();
    } else {
      context.set('status', 200);
      context.set('dto', new GDSDomainDTO(GET_BOOKS, result.books()));
      next();
    }
  });
});
getBooksChain.addSpec('query', true);

const updateBookChain = new Chain(UPDATE_BOOK, (context, param, next) => {
    ExecuteChain(Book.UPDATE_BOOK, {
      bookId: param.bookId(),
      inputData: param.inputData()
    }, result => {
      if (result.$err) {
        context.set('status', 500);
        context.set('dto', new GDSDomainDTO('ERROR_' + UPDATE_BOOK, result.$errorMessage()));
        next();
      } else {
        context.set('status', 200);
        context.set('dto', new GDSDomainDTO(UPDATE_BOOK, 'Book has been updated successfully.'));
        next();
      }
    });
});
updateBookChain.addSpec('bookId', true);
updateBookChain.addSpec('inputData', true);

const deleteBookChain = new Chain(DELETE_BOOK, (context, param, next) => {
    ExecuteChain(Book.DELETE_BOOK, {
        bookId: param.bookId()
    }, result => {
      if (result.$err) {
        context.set('status', 500);
        context.set('dto', new GDSDomainDTO('ERROR_' + DELETE_BOOK, result.$errorMessage()));
        next();
      } else {
        context.set('status', 200);
        context.set('dto', new GDSDomainDTO(DELETE_BOOK, 'Book has been deleted successfully.'));
        next();
      }
    });
});
deleteBookChain.addSpec('bookId', true);

