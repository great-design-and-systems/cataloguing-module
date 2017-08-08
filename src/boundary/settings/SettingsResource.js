import * as Chain from './Chain.info';

import { ExecuteChain } from 'fluid-chains';

export default class SettingsResource {
    constructor(resource) {
        resource.post(Chain.CREATE_SETTINGS, 'settings/create', (req, res) => {
            ExecuteChain(Chain.CREATE_SETTINGS, {
              settingsData: req.body
            }, result => {
                res.status(result.status()).send(result.dto());
            });
        });

        resource.put(Chain.UPDATE_SETTINGS, 'settings/update/:settingsId', (req, res) => {
            ExecuteChain(Chain.UPDATE_SETTINGS, {
                settingsId: req.params.settingsId,
                inputData: req.body
            }, result => {
                res.status(result.status()).send(result.dto());
            });
        });

        resource.get(Chain.GET_SETTINGS, 'settings/get-settings/:schoolId/:libraryId', (req, res) => {
            ExecuteChain(Chain.GET_SETTINGS, {
                schoolId: req.params.schoolId,
                libraryId: req.params.libraryId,
            }, result => {
                res.status(result.status()).send(result.dto());
            });
        });
    }
}