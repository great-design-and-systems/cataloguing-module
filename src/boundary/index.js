import { ExpressApp, GDSDomainResource } from 'gds-stack';
import { BookChains, BookResource } from './book/';

const resource = new GDSDomainResource(ExpressApp, 'api');
new BookResource(resource);
module.exports = {
    BookChains,
    BookResource: resource    
};