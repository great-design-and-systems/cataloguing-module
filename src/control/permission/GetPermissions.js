import { Chain, ExecuteChain } from 'fluid-chains';
import { CATALOG_ERROR_HANDLER, PAGINATION_HANDLER } from '../util/Chain.info';
import { GET_PERMISSIONS } from './Chain.info';
import { Permission } from '../../entity/';

const Action = (context, param, next) => {
    const query = param.query ? param.query() : {};
    const page = param.page();
    const limit = param.limit();
    Permission.paginate(query, {
      page: page ? parseInt(page) : 1,
      limit: limit ? parseInt(limit) : 10,
      sort: param.sort()
    }, (err, result) => {
        context.set('permissions', result);
        next(err);
    });

};

const GetPermissions = new Chain(GET_PERMISSIONS, Action,
    undefined, CATALOG_ERROR_HANDLER);

GetPermissions.addSpec('query', true);
GetPermissions.addSpec('page', false);
GetPermissions.addSpec('limit', false);
GetPermissions.addSpec('sort', false);
