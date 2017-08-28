import { Chain } from 'fluid-chains';
import { PAGINATION_HELPER, CATALOG_ERROR_HANDLER } from './Chain.info';

const Action = (context, param, next) => {
    const entity = param.entity();
    const query = param.query ? param.query() : {};
    const page = param.page();
    const limit = param.limit();
    entity.paginate(query, {
      page: page ? parseInt(page) : 1,
      limit: limit ? parseInt(limit) : 10,
      sort: param.sort()
    }, (err, result) => {
        context.set('records', result);
        next(err);
    });
}

const Paginate = new Chain(PAGINATION_HELPER, Action,
    undefined, CATALOG_ERROR_HANDLER);

Paginate.addSpec('entity', true);
Paginate.addSpec('query', true);
Paginate.addSpec('page', false);
Paginate.addSpec('limit', false);
Paginate.addSpec('sort', false);

