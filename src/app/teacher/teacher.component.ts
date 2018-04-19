import {Component, OnInit} from '@angular/core';
import {Teacher} from '../teacher';
// import {Teachers} from '../mock-teacher';
import {TeacherService} from '../teacher.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  // teachers = Teachers;
  teachers: Teacher[];

  // selectedTeacher: Teacher;

  constructor(private teacherService: TeacherService) {}

  ngOnInit() {
    this.getTeachers();
  }
  // onSelect(teacher: Teacher): void {
  //   this.selectedTeacher = teacher;
  // }
  getTeachers(): void {
    this.teacherService.getTeachers().subscribe(teachers => (this.teachers = teachers));
  }
}
