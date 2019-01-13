import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { StudentActionsTypes } from './../state/student.actions';
import { studentReducer } from './../state/student.reducer';
import { StudentsRec } from './../model/students';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})

export class StudentListComponent implements OnInit {
studentsList: Observable<StudentsRec>;
error$: Observable<string>;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch({type: 'LOAD_STUDENT_LIST'});
    this.store.subscribe(state => {
      console.log(state);
      this.studentsList = state.students;
      console.log(this.studentsList);
    });

  }

}
