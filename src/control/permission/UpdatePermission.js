import { Chain } from 'fluid-chains';
import { CATALOG_ERROR_HANDLER } from '../util/Chain.info';
import { UPDATE_PERMISSION } from './Chain.info';
import { Permission } from '../../entity/';

const Action = (context, param, next) => {
    Permission.update({ _id: param.permissionId() }, param.inputData(), (err, result) => {
      context.set('updatePermission', result);
       next(err);
    });
}

const UpdatePermission = new Chain(UPDATE_PERMISSION, Action,
    undefined, CATALOG_ERROR_HANDLER);

UpdatePermission.addSpec('permissionId', true);
UpdatePermission.addSpec('inputData', true);