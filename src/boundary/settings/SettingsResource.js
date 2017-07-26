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

        resource.put(Chain.UPDATE_SETTINGS, 'settings/update/:schoolId', (req, res) => {
            ExecuteChain(Chain.UPDATE_SETTINGS, {
                schoolId: req.params.schoolId,
                inputData: req.body
            }, result => {
                res.status(result.status()).send(result.dto());
            });
        });

        resource.delete(Chain.DELETE_SETTINGS, 'settings/delete/:schoolId', (req, res) => {
            ExecuteChain(Chain.DELETE_SETTINGS, {
                schoolId: req.params.schoolId,
                inputData: req.body
            }, result => {
                res.status(result.status()).send(result.dto());
            });
        });

        resource.get(Chain.GET_SETTINGS, 'settings/get-settings/:schoolId/:settingType', (req, res) => {
            ExecuteChain(Chain.GET_SETTINGS, {
                schoolId: req.params.schoolId,
                settingType: req.params.settingType,
            }, result => {
                res.status(result.status()).send(result.dto());
            });
        });
    }
}