import { CREATE_SETTINGS, UPDATE_SETTINGS, GET_SETTINGS } from './Chain.info';
import { Chain, ExecuteChain } from 'fluid-chains';
import { GDSDomainDTO } from 'gds-stack';
import { Settings } from '../../control/';

const createSettingsChain = new Chain(CREATE_SETTINGS, (context, param, next) => {
  const settings = param.settingsData();

  ExecuteChain(Settings.CREATE_SETTINGS, {
    schoolId: settings.schoolId,
    libraryId: settings.libraryId,
    funds: settings.funds,
    currencies: settings.currencies,
    resourceTypes: settings.resourceTypes
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

const updateSettingsChain = new Chain(UPDATE_SETTINGS, (context, param, next) => {
    ExecuteChain(Settings.UPDATE_SETTINGS, {
      settingsId: param.settingsId(),
      inputData: param.inputData()
    }, result => {
      if (result.$err) {
        context.set('status', 500);
        context.set('dto', new GDSDomainDTO('ERROR_' + UPDATE_SETTINGS, result.$errorMessage()));
        next();
      } else {
        context.set('status', 200);
        context.set('dto', new GDSDomainDTO(UPDATE_SETTINGS, 'Settings has been updated successfully.'));
        next();
      }
    });
});
updateSettingsChain.addSpec('settingsId', true);
updateSettingsChain.addSpec('inputData', true);

const getSettingsChain = new Chain(GET_SETTINGS, (context, param, next) => {
  ExecuteChain(Settings.GET_SETTINGS, {
      schoolId: param.schoolId(),
      libraryId: param.libraryId()
  }, result => {
    if (result.$err) {
      context.set('status', 500);
      context.set('dto', new GDSDomainDTO('ERROR_' + GET_SETTINGS, result.$errorMessage()));
      next();
    } else {
      context.set('status', 200);
      context.set('dto', new GDSDomainDTO(GET_SETTINGS, result.settings()));
      next();
    }
  });
});
getSettingsChain.addSpec('schoolId', true);
getSettingsChain.addSpec('libraryId', true);