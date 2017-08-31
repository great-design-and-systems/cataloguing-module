import CreateBook from './book/CreateBook';
import DeleteBook from './book/DeleteBook';
import GetBooks from './book/GetBooks';
import UpdateBook from './book/UpdateBook';
import CreatePermission from './permission/CreatePermission';
import DeletePermission from './permission/DeletePermission';
import GetPermissions from './permission/GetPermissions';
import UpdatePermission from './permission/UpdatePermission';
import CreateSettings from './settings/CreateSettings';
import UpdateSettings from './settings/UpdateSettings';
import GetSettings from './settings/GetSettings';
import CreateSubject from './subject/CreateSubject';
import GetSubjects from './subject/GetSubjects';
import GenerateUrl from './search/GenerateUrl';
import SetTimeout from './search/SetTimeout';
import SetProxy from './search/SetProxy';
import GetResponse from './search/GetResponse';
import ReturnJson from './search/ReturnJson';
import CatalogErrorHandler from './util/CatalogErrorHandler';
import PaginationHandler from './util/PaginationHandler';
import Book from './book/Chain.info';
import Subject from './subject/Chain.info';
import Util from './util/Chain.info';
import Settings from './settings/Chain.info';
import Search from './search/Chain.info';
import Permission from './permission/Chain.info';

module.exports = {
    Book,
    Subject,
    Util,
    Settings,
    Search,
    Permission
}