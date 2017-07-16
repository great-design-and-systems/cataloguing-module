import { CREATE_SUBJECT } from './Chain.info';
import { Chain } from 'fluid-chains';
import { CATALOG_ERROR_HANDLER } from '../util/Chain.info';
import { Subject } from '../../entity/';

const Action = (context, param, next) => {
    Subject.create({
        subjectType: param.subjectType(),
        source: param.source(),
        personalName: param.personalName(),
        dates: param.dates(),
        fullName: param.fullName(),
        workTitle: param.workTitle(),
        formSubdivision: param.formSubdivision(),
        generalSubdivision: param.generalSubdivision(),
        chronologicalSubdivision: param.chronologicalSubdivision(),
        georaphicSubdivision: param.georaphicSubdivision()
    }, (err, result) => {
        context.set('subjectId', result._id);
        next(err);
    });
}

const CreateSubject = new Chain(CREATE_SUBJECT,
    Action, undefined, CATALOG_ERROR_HANDLER);

CreateSubject.addSpec('subjectType', true);
CreateSubject.addSpec('source', false);
CreateSubject.addSpec('personalName', false);
CreateSubject.addSpec('dates', false);
CreateSubject.addSpec('fullName', false);
CreateSubject.addSpec('workTitle', false);
CreateSubject.addSpec('formSubdivision', false);
CreateSubject.addSpec('generalSubdivision', false);
CreateSubject.addSpec('chronologicalSubdivision', false);
CreateSubject.addSpec('georaphicSubdivision', false);