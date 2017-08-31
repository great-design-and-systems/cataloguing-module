import { Chain } from 'fluid-chains';
import { CATALOG_ERROR_HANDLER } from '../util/Chain.info';
import { DELETE_PERMISSION } from './Chain.info';
import { Permission } from '../../entity/';

const Action = (context, param, next) => {
    Permission.findByIdAndRemove(param.permissionId(), err => {
        next(err);
    });
}

const DeletePermission = new Chain(DELETE_PERMISSION, Action,
    undefined, CATALOG_ERROR_HANDLER);

DeletePermission.addSpec('permissionId', true);