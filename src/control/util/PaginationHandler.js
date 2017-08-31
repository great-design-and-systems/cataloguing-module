import { Chain } from 'fluid-chains';
import { PAGINATION_HANDLER, CATALOG_ERROR_HANDLER } from './Chain.info';

const Action = (context, param, next) => {
    const entityObj = param.entityObj();
    const query = param.query ? param.query() : {};
    const page = param.page();
    const limit = param.limit();
    console.log('basta');
    entityObj.paginate(query, {
      page: page ? parseInt(page) : 1,
      limit: limit ? parseInt(limit) : 10,
      sort: param.sort()
    }, (err, result) => {
        context.set('records', result);
        next(err);
    });
}

const PaginateHelper = new Chain(PAGINATION_HANDLER, Action,
    undefined, CATALOG_ERROR_HANDLER);

PaginateHelper.addSpec('entityObj', true);
PaginateHelper.addSpec('query', true);
PaginateHelper.addSpec('page', false);
PaginateHelper.addSpec('limit', false);
PaginateHelper.addSpec('sort', false);

