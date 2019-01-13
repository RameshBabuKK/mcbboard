import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/Operators';

import * as studentActions from './../state/student.actions';
import { StudentsRec } from './../model/students';
import { StudentsService } from '../students.service';

@Injectable ()
export class StudentEffects {
    constructor (
        private actions: Actions, private studService: StudentsService) {}

        @Effect()
        getStudents$: Observable<Action> = this.actions.pipe(
            ofType<studentActions.ListStudent>(
                studentActions.StudentActionsTypes.LOAD_STUDENT_LIST
            ),
            mergeMap((actions: studentActions.ListStudent) =>
                this.studService.getStudent().pipe(
                    map(
                        (students: StudentsRec[]) =>
                        new studentActions.ListStudentSuccess(students)
                    ), catchError(err => of(new studentActions.ListStudentFail(err)))
                )
            )
        );
}
