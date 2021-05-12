import {Injectable} from '@angular/core';
import {CourseModel} from '../../models/course/course-model/course-model';
import {ParcoursModel} from '../../models/course/parcours-model/parcours-model';
import {SectionModel} from '../../models/course/section-model/section-model';
import {StudentModule} from '../../../feature/student/student.module';
import {CourseStudent} from '../../models/course-student/course-student';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  sections: SectionModel[] = [{
    id: 1,
    title: 'section1',
    container: '<h2><ul><li><font color="#0af570"><span style="font-family: &quot;Comic Sans MS&quot;; font-size: x-large; background-color: transparent;">&nbsp;liste</span></font></li><li><font color="#0af570"><span style="font-family: &quot;Comic Sans MS&quot;; font-size: x-large;">&nbsp;liste</span><span style="font-family: &quot;Comic Sans MS&quot;; font-size: x-large; background-color: transparent;">&nbsp;</span></font></li><li><span style="font-family: &quot;Comic Sans MS&quot;; font-size: x-large; background-color: transparent;"><font color="#0af570">&nbsp;liste</font></span></li><li><span style="font-family: &quot;Comic Sans MS&quot;; font-size: x-large; background-color: transparent;"><font color="#0af570">&nbsp;liste</font></span></li></ul></h2><p><font face="Comic Sans MS" size="5"><br></font></p>',
    courseId: 1
  }, {
    id: 2,
    title: 'section2',
    container: 'containe2',
    courseId: 1
  }, {
    id: 3,
    title: 'section3',
    container: 'containe3',
    courseId: 1
  }];

  courses: CourseModel[] = [{
    id: 1,
    title: 'course11',
    description: 'course1 -- 14h',
    image: null,
    parcoursId: 1,
    sections: [this.sections[0], this.sections[1], this.sections[2]]
  }, {
    id: 2,
    title: 'course22',
    description: 'course2 -- 15h',
    image: null,
    parcoursId: 1,
    sections: [this.sections[1], this.sections[2]]
  }, {
    id: 3,
    title: 'course33',
    description: 'course3 -- 5h',
    image: null,
    parcoursId: 1,
    sections: [this.sections[0]]
  }, {
    id: 4,
    title: 'course44',
    description: 'course3 -- 5h',
    image: null,
    parcoursId: 1,
    sections: [this.sections[0],this.sections[1], this.sections[2],this.sections[2]]
  }];
  parcours: ParcoursModel[] = [{
    id: 1,
    description: 'parcours1',
    title :'string',
    courses: [this.courses[0], this.courses[1], this.courses[2]]
  }];
  student: StudentModule = {
    id: 1,
    dateOfBirth: '20/05/1997',
    phone: +21278963254,
    firstName: 'samia',
    lastName: 'aknu',
    email: 'samia@gmail.com',
    login: 'samia',
    password: 'samia',
    gender: 'f'
  };
  courseStudent: CourseStudent[]=[{
    id:1,
  numberValidSection:2,
  numberNoValidSection:1,
  course:this.courses[0],
  student:this.student
  },{
    id:2,
    numberValidSection:0,
    numberNoValidSection:2,
    course:this.courses[1],
    student:this.student
  },{
    id:3,
    numberValidSection:1,
    numberNoValidSection:0,
    course:this.courses[2],
    student:this.student
  },{
    id:4,
    numberValidSection:2,
    numberNoValidSection:2,
    course:this.courses[3],
    student:this.student
  },]

  constructor() {
  }

  getCourses() {
    return this.courses;
  }

  getParcours() {
    return this.parcours;
  }

  getSection() {
    return this.sections;
  }
  getValidSection(){
    return this.courseStudent;
  }
}
