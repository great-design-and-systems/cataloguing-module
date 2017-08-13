import { GET_RESPONSE } from './Chain.info';
import { Chain } from 'fluid-chains';
import { CATALOG_ERROR_HANDLER } from '../util/Chain.info';

const SEARCH_TIMEOUT = process.env.SEARCH_TIMEOUT || 30000;

const Action = (context, param, next) => {
    param.request().end((response) => {
        context.set('records', response.body);
        next(response.error);
    });

}

const GetResponse = new Chain(GET_RESPONSE,
    Action, undefined, CATALOG_ERROR_HANDLER);

GetResponse.addSpec('request', true);