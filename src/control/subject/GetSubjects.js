import { Chain } from 'fluid-chains';
import { CATALOG_ERROR_HANDLER } from '../util/Chain.info';
import { GET_SUBJECTS } from './Chain.info';
import { Subject } from '../../entity/';

const Action = (context, param, next) => {
    const query = param.query ? param.query() : {};
    const page = param.page();
    const limit = param.limit();
    Subject.paginate(query, {
      page: page ? parseInt(page) : 1,
      limit: limit ? parseInt(limit) : 10,
      sort: param.sort()
    }, (err, result) => {
        context.set('subjects', result);
        next(err);
    });
}

const GetSubjects = new Chain(GET_SUBJECTS, Action,
    undefined, CATALOG_ERROR_HANDLER);

GetSubjects.addSpec('query', true);
GetSubjects.addSpec('page', false);
GetSubjects.addSpec('limit', false);
GetSubjects.addSpec('sort', false);
