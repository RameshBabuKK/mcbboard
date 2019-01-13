import { createSelector } from '@ngrx/store';

import { IStudentState } from '../state/Student.state';

const selectStudents = (state: IStudentState) => state.selectedStudents;
