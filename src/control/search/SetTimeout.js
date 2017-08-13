import { SET_TIMEOUT } from './Chain.info';
import { Chain } from 'fluid-chains';
import { CATALOG_ERROR_HANDLER } from '../util/Chain.info';

const SEARCH_TIMEOUT = process.env.SEARCH_TIMEOUT || 30000;

const Action = (context, param, next) => {
    context.set('request', param.request().timeout(parseInt(SEARCH_TIMEOUT)));
    next();
}

const SetTimeout = new Chain(SET_TIMEOUT,
    Action, undefined, CATALOG_ERROR_HANDLER);

SetTimeout.addSpec('request', true);