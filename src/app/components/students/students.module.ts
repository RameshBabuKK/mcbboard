import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentListComponent } from './student-list/student-list.component';
import { RouterModule, Routes } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule, Actions } from '@ngrx/effects';
import { studentReducer } from './state/student.reducer';
import { StudentEffects } from './state/student.effects';

const studentroutes: Routes = [
  { path: 'addstudent', component: StudentCreateComponent },
  { path: 'liststudent', component: StudentListComponent },
  { path: 'editstudent/:id', component: StudentListComponent }
];


@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('students', studentReducer),
    EffectsModule.forFeature([StudentEffects]),
    RouterModule.forChild(studentroutes)
  ],
  declarations: [StudentListComponent, StudentCreateComponent, StudentEditComponent]
})
export class StudentsModule { }
