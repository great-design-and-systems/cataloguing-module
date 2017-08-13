import { SEARCH_ONLINE } from './Chain.info';
import { Chain, ExecuteChain } from 'fluid-chains';
import { GDSDomainDTO } from 'gds-stack';
import { Search } from '../../control/';

const searchOnlineChain = new Chain(SEARCH_ONLINE, (context, param, next) => {
  const query = param.query ? param.query() : {};
  ExecuteChain([
    Search.GENERATE_URL,
    Search.SET_PROXY,
    Search.SET_TIMEOUT,
    Search.GET_RESPONSE], {
      source: param.source(),
      query: query
    }, result => {
      if (result.$err) {
        context.set('status', 500);
        context.set('dto', new GDSDomainDTO('ERROR_' + SEARCH_ONLINE, result.$errorMessage()));
        next();
      } else {
        context.set('status', 200);
        context.set('dto', new GDSDomainDTO(SEARCH_ONLINE, result.records()));
        next();
      }
    });
});
searchOnlineChain.addSpec('source', true);
searchOnlineChain.addSpec('query', true);