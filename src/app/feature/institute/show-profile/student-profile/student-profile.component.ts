import {Component, OnInit} from '@angular/core';
import {InstituteService} from '../../../../core/services/institute-service/institute.service';
import {StudentModel} from '../../../../core/models/student-model/student-model';
import {StudentService} from '../../../../core/services/Student-service/student.service';




@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {
  listStudent: StudentModel[]  = []

  constructor(private instituteService:InstituteService,private studentService:StudentService) {
  }

  ngOnInit(): void {
   this.getStudents()
  }

  getStudents() {
    if (this.instituteService.intitute.etudiantVos) {
      this.listStudent=this.instituteService.intitute.etudiantVos;
    }

  }


  delete(id:number | undefined) {
    console.log(id)
    this.studentService.deleteStudent(id).subscribe(data => {
      if (data == 1) {
        this.getStudents();
        alert('success');
      } else {
        alert("Error")
      }
    });
  }
}
