import { Chain } from 'fluid-chains';
import { CATALOG_ERROR_HANDLER } from '../util/Chain.info';
import { UPDATE_SETTINGS } from './Chain.info';
import { Settings } from '../../entity/';

const Action = (context, param, next) => {
    Settings.update({ _id: param.settingsId() }, param.inputData(), (err, result) => {
      context.set('updateSettings', result);
       next(err);
    });
}

const UpdateSettings = new Chain(UPDATE_SETTINGS, Action,
    undefined, CATALOG_ERROR_HANDLER);

UpdateSettings.addSpec('settingsId', true);
UpdateSettings.addSpec('inputData', true);