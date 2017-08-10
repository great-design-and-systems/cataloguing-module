import { CREATE_SETTINGS } from './Chain.info';
import { Chain } from 'fluid-chains';
import { CATALOG_ERROR_HANDLER } from '../util/Chain.info';
import { Settings } from '../../entity/';

const Action = (context, param, next) => {
    Settings.create({
        schoolId: param.schoolId(),
        libraryId: param.libraryId(),
        funds: param.funds(),
        currencies: param.currencies(),
        resourceTypes: param.resourceTypes()
    }, (err, result) => {
        context.set('settingsId', result._id);
        console.log(err);
        next(err);
    });
}

const CreateSettings = new Chain(CREATE_SETTINGS,
    Action, undefined, CATALOG_ERROR_HANDLER);

CreateSettings.addSpec('schoolId', true);
CreateSettings.addSpec('libraryId', true);
CreateSettings.addSpec('funds', false);
CreateSettings.addSpec('currencies', false);
CreateSettings.addSpec('resourceTypes', false);