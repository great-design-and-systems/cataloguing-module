import { CREATE_PERMISSION } from './Chain.info';
import { Chain } from 'fluid-chains';
import { CATALOG_ERROR_HANDLER } from '../util/Chain.info';
import { Permission } from '../../entity/';

const Action = (context, param, next) => {
    Permission.create({
      userId: param.userId(),
      permissionType: param.permissionType(),
      libraryId: param.libraryId(),
      schoolId: param.schoolId()
    }, (err, result) => {
        context.set('permissionId', result._id);
        next(err);
    });
}

const CreatePermission = new Chain(CREATE_PERMISSION,
    Action, undefined, CATALOG_ERROR_HANDLER);

CreatePermission.addSpec('userId', true);
CreatePermission.addSpec('permissionType', true);
CreatePermission.addSpec('libraryId', false);
CreatePermission.addSpec('schoolId', false);