import { Component, OnInit } from '@angular/core';
import {StudentService} from '../../core/services/Student-service/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  isCollapsed = false;

  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
    this.getStudentLoged()
  }

  getStudentLoged() {
    this.studentService.getProfLoged().subscribe(data => {
      this.studentService.student=data
      console.log(this.studentService.student)
    });
  }

}
