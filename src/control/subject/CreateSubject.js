import { CREATE_SUBJECT } from './Chain.info';
import { Chain } from 'fluid-chains';
import { CATALOG_ERROR_HANDLER } from '../util/Chain.info';
import { Subject } from '../../entity/';

const Action = (context, param, next) => {
    Subject.create({
        field: param.subjectField(),
        value: param.subjectValue()
    }, (err, result) => {
        context.set('subjectId', result._id);
        console.log(err);
        next(err);
    });
}

const CreateSubject = new Chain(CREATE_SUBJECT,
    Action, undefined, CATALOG_ERROR_HANDLER);

CreateSubject.addSpec('subjectField', true);
CreateSubject.addSpec('subjectValue', true);