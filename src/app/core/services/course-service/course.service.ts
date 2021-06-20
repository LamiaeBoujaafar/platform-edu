import {Injectable} from '@angular/core';
import {CourseModel} from '../../models/course/course-model/course-model';
import {ParcoursModel} from '../../models/course/parcours-model/parcours-model';
import {SectionModel} from '../../models/course/section-model/section-model';
import {StudentModule} from '../../../feature/student/student.module';
import {CourseStudent} from '../../models/course-student/course-student';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Course} from '../../models/course/course-model/course';
import {EtudiantCours} from '../../models/etudiant-cours/etudiant-cours';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  sections: SectionModel[] = [{
    id: 1,
    title: 'section1',
    contenu: '<p>Au chapitre pr&#233;c&#233;dent, vous avez appris &#224; cr&#233;er une page HTML toute simple. D\'accord, elle n\'&#233;tait pas franchement magnifique, mais c\'&#233;tait une vraie page HTML quand m&#234;me.</p><p>Comme vous le savez, un site web est compos&#233; de plusieurs pages. Comment faire pour aller d\'une page vers une autre ? &#192; l\'aide d\'un lien, pardi ! Dans ce chapitre, nous allons justement apprendre &#224; cr&#233;er des liens entre nos pages.</p><p>Je suppose que chacun d\'entre vous sait ce qu\'est un lien : il s\'agit d\'un texte sur lequel on peut cliquer pour se rendre sur une autre page.<br>On peut faire un lien d\'une page&#160;<code>a.html</code>&#160; vers une page&#160;<code>b.html</code>&#160; , mais on peut aussi faire un lien vers un autre site (par exemple,&#160;<code>http://www.siteduzero.com</code>&#160; ). Dans les deux cas, nous allons voir que le fonctionnement est le m&#234;me.</p><h3>Un lien vers un autre site</h3><p>Il est facile de reconna&#238;tre les liens sur une page : ils sont &#233;crits d\'une fa&#231;on diff&#233;rente (par d&#233;faut, en bleu et soulign&#233;s), et un curseur en forme de main appara&#238;t lorsqu\'on pointe dessus.</p><p>Je vous propose d\'essayer de coder le lien qui am&#232;ne vers OpenClassrooms, comme &#224; la figure suivante.</p><p class=\\"\\">Pour faire un lien, la balise que nous allons utiliser est tr&#232;s simple &#224; retenir :&#160;<code>&lt;a&gt;</code>&#160; . Il faut cependant lui ajouter un attribut,&#160;<code>href</code>&#160; , pour indiquer vers quelle page le lien doit conduire.</p><p class=\\"\\">Par exemple, le code ci-dessous est un lien qui am&#232;ne vers&#160;OpenClassrooms, situ&#233; &#224; l\'adresse&#160;<code>https://openclassrooms.com</code>&#160; :</p><pre class=\\"\\"><code>&lt;a href=&#34;https://openclassrooms.com&#34;&gt;OpenClassrooms&lt;/a&gt;</code></pre><p class=\\"hoveredCourseElement\\">Nous allons placer ce lien au sein d\'un paragraphe. Voici donc comment reproduire l\'exemple de la figure pr&#233;c&#233;dente :</p>',
    coursId: 1
  }, {
    id: 2,
    title: 'section2',
    contenu: '<p>Au chapitre pr&#233;c&#233;dent, vous avez appris &#224; cr&#233;er une page HTML toute simple. D\'accord, elle n\'&#233;tait pas franchement magnifique, mais c\'&#233;tait une vraie page HTML quand m&#234;me.</p><p>Comme vous le savez, un site web est compos&#233; de plusieurs pages. Comment faire pour aller d\'une page vers une autre ? &#192; l\'aide d\'un lien, pardi ! Dans ce chapitre, nous allons justement apprendre &#224; cr&#233;er des liens entre nos pages.</p><p>Je suppose que chacun d\'entre vous sait ce qu\'est un lien : il s\'agit d\'un texte sur lequel on peut cliquer pour se rendre sur une autre page.<br>On peut faire un lien d\'une page&#160;<code>a.html</code>&#160; vers une page&#160;<code>b.html</code>&#160; , mais on peut aussi faire un lien vers un autre site (par exemple,&#160;<code>http://www.siteduzero.com</code>&#160; ). Dans les deux cas, nous allons voir que le fonctionnement est le m&#234;me.</p><h3>Un lien vers un autre site</h3><p>Il est facile de reconna&#238;tre les liens sur une page : ils sont &#233;crits d\'une fa&#231;on diff&#233;rente (par d&#233;faut, en bleu et soulign&#233;s), et un curseur en forme de main appara&#238;t lorsqu\'on pointe dessus.</p><p>Je vous propose d\'essayer de coder le lien qui am&#232;ne vers OpenClassrooms, comme &#224; la figure suivante.</p><p class=\\"\\">Pour faire un lien, la balise que nous allons utiliser est tr&#232;s simple &#224; retenir :&#160;<code>&lt;a&gt;</code>&#160; . Il faut cependant lui ajouter un attribut,&#160;<code>href</code>&#160; , pour indiquer vers quelle page le lien doit conduire.</p><p class=\\"\\">Par exemple, le code ci-dessous est un lien qui am&#232;ne vers&#160;OpenClassrooms, situ&#233; &#224; l\'adresse&#160;<code>https://openclassrooms.com</code>&#160; :</p><pre class=\\"\\"><code>&lt;a href=&#34;https://openclassrooms.com&#34;&gt;OpenClassrooms&lt;/a&gt;</code></pre><p class=\\"hoveredCourseElement\\">Nous allons placer ce lien au sein d\'un paragraphe. Voici donc comment reproduire l\'exemple de la figure pr&#233;c&#233;dente :</p>',
    coursId: 1
  }, {
    id: 3,
    title: 'section3',
    contenu: 'containe3',
    coursId: 1
  }];

  courses: CourseModel[] = [{
    id: 1,
    title: 'Simple tenses',
    description: 'course1 -- 14h',
    image: null,
    parcoursId: 1,
    sections: [this.sections[0], this.sections[1], this.sections[2]]
  }, {
    id: 2,
    title: 'Simple present',
    description: 'course2 -- 15h',
    image: null,
    parcoursId: 1,
    sections: [this.sections[1], this.sections[2]]
  }, {
    id: 3,
    title: 'Simple continuous',
    description: 'course3 -- 5h',
    image: null,
    parcoursId: 1,
    sections: [this.sections[0]]
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
  nombreSectionValide:2,
  nombreSectionNonValide:1,
  cours:this.courses[0],
  etudiant:this.student
  },{
    id:2,
    nombreSectionValide:0,
    nombreSectionNonValide:2,
    cours:this.courses[1],
    etudiant:this.student
  },{
    id:3,
    nombreSectionValide:1,
    nombreSectionNonValide:0,
    cours:this.courses[2],
    etudiant:this.student
  }]

  private baseUrl = "http://localhost:8081/cours/courses/10/";
  private urlCourse = "http://localhost:8081/cours/";
  private urlSection = "http://localhost:8081/section/";
  private urlEtudiantCours = "http://localhost:8081/etudiantCours/";
  constructor( private  httpClient :HttpClient) {
  }

  getCoursesFromDb(): Observable<Array<Course>> {
    return this.httpClient.get<Array<Course>>(this.baseUrl);
  }
  postCourse(course : Course): Observable<Course> {
    return this.httpClient.post<Course>(this.urlCourse,course);
  }
  getCourses() {
    return this.courses;
  }
  postSection(section :SectionModel): Observable<SectionModel>{
    return this.httpClient.post<SectionModel>(this.urlSection,section);
  }
  saveEtudiantCourse(etudiantCourse : EtudiantCours): Observable<EtudiantCours>{
    return this.httpClient.post<EtudiantCours>(this.urlEtudiantCours,etudiantCourse);
  }
  updateEtudiantCourse(etudiantCourse : EtudiantCours): Observable<EtudiantCours>{
    return this.httpClient.put<EtudiantCours>(this.urlEtudiantCours,etudiantCourse);
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
