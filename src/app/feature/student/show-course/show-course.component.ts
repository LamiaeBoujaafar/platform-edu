import {Component, OnInit} from '@angular/core';
import {CourseService} from '../../../core/services/course-service/course.service';
import {Course} from '../../../core/models/course/course-model/course';
import {SectionModel} from '../../../core/models/course/section-model/section-model';
import {Etudiant} from '../../../core/models/etudiantTest/etudiant';
import {ParcoursModel} from '../../../core/models/course/parcours-model/parcours-model';
import {CourseStudent} from '../../../core/models/course-student/course-student';
import {EtudiantCours} from '../../../core/models/etudiant-cours/etudiant-cours';

@Component({
  selector: 'app-show-course',
  templateUrl: './show-course.component.html',
  styleUrls: ['./show-course.component.css']
})

export class ShowCourseComponent implements OnInit {
  courses!: Array<Course>;
  selectedCourse = false;
  courseItem!: Course;
  percent = 0;
  currentCourse = 0;
  sectionLength = 0;
  completedCourse = false;
  studentCourse: EtudiantCours = new EtudiantCours();
  etudiant: Etudiant = {
    id: 1,
    dateNaissance: '200-05-22',
    telephone: '068596666',
    prenom: 'lamiae',
    nom: 'boujaafar',
    email: 'lamiae20ber@gmail.com',
    login: 'login',
    password: 'password',
    sexe: 'F',
    parcours: null,
    cv: 'String',
  };

  constructor(private courseService: CourseService) {
    this.courseService.getCoursesFromDb().subscribe(data => {
      this.courses = data;
    });

  }

  ngOnInit(): void {
    //this.courses = this.courseService.getCourses();
  }

  startCourse(cours: Course) {
    this.courseItem = cours;
    this.selectedCourse = true;
    this.sectionLength = this.courseItem.section.length;

    this.studentCourse = {
      'id': 0,
      'nombreSectionNonValide': this.courseItem.section.length,
      'nombreSectionValide': 0,
      'numberRemainingSection': this.courseItem.section.length,
      'validCours': false,
      'etudiant': null,
      'cours': cours
    };

    console.log('student', this.studentCourse);

    // this.courseService.saveEtudiantCourse(this.studentCourse).subscribe(data => {
    //   console.log(data);
    // });
  }

  increase(): void {
    this.percent = this.percent + (100 / this.sectionLength);
    if (this.percent > 100) {
      this.percent = 100;
    }
    if (this.currentCourse < (this.sectionLength - 1)) {
      this.currentCourse++;
      this.completedCourse = false;
    } else {
      this.completedCourse = true;
    }
  }

  decline() {
    this.percent = this.percent - (100 / this.sectionLength);
    if (this.percent < 0) {
      this.percent = 0;
    }
    if (this.currentCourse > 0) {
      this.currentCourse--;
      this.completedCourse = false;
    }

  }

  back() {
    this.selectedCourse = false;
    this.completedCourse = false;
    this.percent = 0;
    this.currentCourse = 0;
    this.sectionLength = 0;
  }
}
