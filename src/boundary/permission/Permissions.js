import { CREATE_PERMISSION, UPDATE_PERMISSION, DELETE_PERMISSION, GET_PERMISSIONS } from './Chain.info';
import { Chain, ExecuteChain } from 'fluid-chains';
import { GDSDomainDTO } from 'gds-stack';
import { Permission } from '../../control/';

const createPermissionChain = new Chain(CREATE_PERMISSION, (context, param, next) => {
  const permission = param.permissionData();

  ExecuteChain(Permission.CREATE_PERMISSION, {
    userId: permission.userId,
    permissionType: permission.permissionType,
    libraryId: permission.libraryId,
    schoolId: permission.schoolId
  }, result => {
    if (result.$err) {
      context.set('status', 500);
      context.set('dto', new GDSDomainDTO('ERROR_' + CREATE_PERMISSION, result.$errorMessage()));
      next();
    } else {
      context.set('status', 200);
      context.set('dto', new GDSDomainDTO(CREATE_PERMISSION, {
        permissionId: result.permissionId()
      }));
      next();
    }
  });
});
createPermissionChain.addSpec('permissionData', true);

const getPermissionsChain = new Chain(GET_PERMISSIONS, (context, param, next) => {
  const query = param.query ? param.query() : {};
  const page = query.page;
  const limit = query.limit;
  const sort = query.sort;
  delete query.page;
  delete query.limit;
  delete query.sort;
  ExecuteChain(Permission.GET_PERMISSIONS, {
    query: query,
    page: page,
    limit: limit,
    sort: sort
  }, result => {
    if (result.$err) {
      context.set('status', 500);
      context.set('dto', new GDSDomainDTO('ERROR_' + GET_PERMISSIONS, result.$errorMessage()));
      next();
    } else {
      context.set('status', 200);
      context.set('dto', new GDSDomainDTO(GET_PERMISSIONS, result.permissions()));
      next();
    }
  });
});
getPermissionsChain.addSpec('query', true);

const updatePermissionChain = new Chain(UPDATE_PERMISSION, (context, param, next) => {
  ExecuteChain(Permission.UPDATE_PERMISSION, {
    permissionId: param.permissionId(),
    inputData: param.inputData()
  }, result => {
    if (result.$err) {
      context.set('status', 500);
      context.set('dto', new GDSDomainDTO('ERROR_' + UPDATE_PERMISSION, result.$errorMessage()));
      next();
    } else {
      context.set('status', 200);
      context.set('dto', new GDSDomainDTO(UPDATE_PERMISSION, 'Permission has been updated successfully.'));
      next();
    }
  });
});
updatePermissionChain.addSpec('permissionId', true);
updatePermissionChain.addSpec('inputData', true);

const deletePermissionChain = new Chain(DELETE_PERMISSION, (context, param, next) => {
  ExecuteChain(Permission.DELETE_PERMISSION, {
    permissionId: param.permissionId()
  }, result => {
    if (result.$err) {
      context.set('status', 500);
      context.set('dto', new GDSDomainDTO('ERROR_' + DELETE_PERMISSION, result.$errorMessage()));
      next();
    } else {
      context.set('status', 200);
      context.set('dto', new GDSDomainDTO(DELETE_PERMISSION, 'Permission has been deleted successfully.'));
      next();
    }
  });
});
deletePermissionChain.addSpec('permissionId', true);

