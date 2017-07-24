import { GET_SUBJECTS } from './Chain.info';
import { Chain, ExecuteChain } from 'fluid-chains';
import { GDSDomainDTO } from 'gds-stack';
import { Subject } from '../../control/';

const getSubjectsChain = new Chain(GET_SUBJECTS, (context, param, next) => {
  const query = param.query ? param.query() : {};
  const page = query.page;
  const limit = query.limit;
  const sort = query.sort;
  delete query.page;
  delete query.limit;
  delete query.sort;
  ExecuteChain(Subject.GET_SUBJECTS, {
    query: query,
    page: page,
    limit: limit,
    sort: sort
  }, result => {
    if (result.$err) {
      context.set('status', 500);
      context.set('dto', new GDSDomainDTO('ERROR_' + GET_SUBJECTS, result.$errorMessage()));
      next();
    } else {
      context.set('status', 200);
      context.set('dto', new GDSDomainDTO(GET_SUBJECTS, result.subjects()));
      next();
    }
  });
});
getSubjectsChain.addSpec('query', true);