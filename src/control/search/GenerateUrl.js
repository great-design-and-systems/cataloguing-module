import { GENERATE_URL } from './Chain.info';
import { Chain } from 'fluid-chains';
import { CATALOG_ERROR_HANDLER } from '../util/Chain.info';
import { objectToQuery } from '../catalog-utils.js';
import propertiesReader from 'properties-reader';
import unirest from 'unirest';


const properties = propertiesReader('sru.list');

const Action = (context, param, next) => {
    let query = param.query();
    query.operation = 'searchRetrieve';
    query.version = query.version || '1.1';
    query.maximumRecords = (query.maximumRecords) ? parseInt(query.maximumRecords) : 25;
    let url = properties.get(param.source());
    let queryParam = objectToQuery(query);
    let searchUrl = url + queryParam;
    context.set('request', unirest.get(searchUrl));
    next();
}

const GenerateUrl = new Chain(GENERATE_URL,
    Action, undefined, CATALOG_ERROR_HANDLER);

GenerateUrl.addSpec('source', true);
GenerateUrl.addSpec('query', true);