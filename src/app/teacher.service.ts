import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {Teacher} from './teacher';
import {Teachers} from './mock-teacher';

@Injectable()
export class TeacherService {
  constructor() {}

  getTeachers(): Observable<Teacher[]> {
    return of(Teachers);
  }
  getTeacher(id: number): Observable<Teacher> {
    return of(Teachers.find(teacher => teacher.id === id));
  }
}
