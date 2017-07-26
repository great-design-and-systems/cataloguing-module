import { CREATE_SETTINGS, UPDATE_SETTINGS, DELETE_SETTINGS, GET_SETTINGS } from './Chain.info';
import { Chain, ExecuteChain } from 'fluid-chains';
import { GDSDomainDTO } from 'gds-stack';
import { Settings } from '../../control/';

const createSettingsChain = new Chain(CREATE_SETTINGS, (context, param, next) => {
  const settings = param.settingsData();

  ExecuteChain([Settings.GET_SETTINGS, Settings.CREATE_SETTINGS], {
    // TODO
    schoolId: settings.schoolId

  }, result => {
    if (result.$err) {
      context.set('status', 500);
      context.set('dto', new GDSDomainDTO('ERROR_' + CREATE_SETTINGS, result.$errorMessage()));
      next();
    } else {
      context.set('status', 200);
      context.set('dto', new GDSDomainDTO(CREATE_SETTINGS, {
        settingsId: result.settingsId()
      }));
      next();
    }
  });
});
createSettingsChain.addSpec('settingsData', true);
