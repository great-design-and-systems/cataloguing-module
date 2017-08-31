import * as Chain from './Chain.info';

import { ExecuteChain } from 'fluid-chains';

export default class PermissionResource {
    constructor(resource) {
        resource.post(Chain.CREATE_PERMISSION, 'permission/create', (req, res) => {
            ExecuteChain(Chain.CREATE_PERMISSION, {
              permissionData: req.body
            }, result => {
                res.status(result.status()).send(result.dto());
            });
        });

        resource.put(Chain.UPDATE_PERMISSION, 'permission/update/:permissionId', (req, res) => {
            ExecuteChain(Chain.UPDATE_PERMISSION, {
                permissionId: req.params.permissionId,
                inputData: req.body
            }, result => {
                res.status(result.status()).send(result.dto());
            });
        });

        resource.delete(Chain.DELETE_PERMISSION, 'permission/delete/:permissionId', (req, res) => {
            ExecuteChain(Chain.DELETE_PERMISSION, {
                permissionId: req.params.permissionId
            }, result => {
                res.status(result.status()).send(result.dto());
            });
        });

        resource.get(Chain.GET_PERMISSIONS, 'permission/get-permissions', (req, res) => {
            ExecuteChain(Chain.GET_PERMISSIONS, {
                query: req.query
            }, result => {
                res.status(result.status()).send(result.dto());
            });
        });
    }
}