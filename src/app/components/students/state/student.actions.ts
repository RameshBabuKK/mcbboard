import { Action } from '@ngrx/store';
import { StudentsRec } from './../model/students';

export enum StudentActionsTypes  {
    LOAD_STUDENT_LIST = '[student] List Student',
    LOAD_STUDENT_LIST_SUCCESS = '[student] List Student Success',
    LOAD_STUDENT_LIST_FAIL = '[student] List Student Failed',
}


export class ListStudent implements Action {
    readonly type = StudentActionsTypes.LOAD_STUDENT_LIST;
}

export class ListStudentSuccess implements Action {
    readonly type = StudentActionsTypes.LOAD_STUDENT_LIST_SUCCESS;
    constructor (public payload: StudentsRec[]) {}
}

export class ListStudentFail implements Action {
    readonly type = StudentActionsTypes.LOAD_STUDENT_LIST_FAIL;
    constructor (public payload: string) {}
}

export type Action = | ListStudent | ListStudentSuccess | ListStudentFail;
