import { Chain } from 'fluid-chains';
import { CATALOG_ERROR_HANDLER } from '../util/Chain.info';
import { GET_SETTINGS } from './Chain.info';
import { Settings } from '../../entity/';

const Action = (context, param, next) => {
    Settings.find({
        schoolId: param.schoolId(),
        libraryId: param.libraryId()
    }, (err, result) => {
        context.set('settings', result);
        next(err);
    });
}

const GetSettings = new Chain(GET_SETTINGS, Action,
    undefined, CATALOG_ERROR_HANDLER);

GetSettings.addSpec('schoolId', true);
GetSettings.addSpec('libraryId', true);
