import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentsRec } from './model/students';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private studentUrl = 'http://localhost:3000/students';

  constructor(private http: HttpClient) { }

    getStudent(): Observable<StudentsRec[]> {
      return this.http.get<StudentsRec[]>(this.studentUrl);
    }
}
