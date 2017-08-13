import { SET_PROXY } from './Chain.info';
import { Chain } from 'fluid-chains';
import { CATALOG_ERROR_HANDLER } from '../util/Chain.info';

const PROXY = process.env.PROXY;

const Action = (context, param, next) => {
    const request = PROXY ? param.request().proxy(PROXY) : param.request();
    context.set('request', request);
    next();
}

const SetProxy = new Chain(SET_PROXY,
    Action, undefined, CATALOG_ERROR_HANDLER);

SetProxy.addSpec('request', true);