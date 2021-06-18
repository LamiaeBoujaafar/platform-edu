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
    container: '<p>Au chapitre pr&#233;c&#233;dent, vous avez appris &#224; cr&#233;er une page HTML toute simple. D\'accord, elle n\'&#233;tait pas franchement magnifique, mais c\'&#233;tait une vraie page HTML quand m&#234;me.</p><p>Comme vous le savez, un site web est compos&#233; de plusieurs pages. Comment faire pour aller d\'une page vers une autre ? &#192; l\'aide d\'un lien, pardi ! Dans ce chapitre, nous allons justement apprendre &#224; cr&#233;er des liens entre nos pages.</p><p>Je suppose que chacun d\'entre vous sait ce qu\'est un lien : il s\'agit d\'un texte sur lequel on peut cliquer pour se rendre sur une autre page.<br>On peut faire un lien d\'une page&#160;<code>a.html</code>&#160; vers une page&#160;<code>b.html</code>&#160; , mais on peut aussi faire un lien vers un autre site (par exemple,&#160;<code>http://www.siteduzero.com</code>&#160; ). Dans les deux cas, nous allons voir que le fonctionnement est le m&#234;me.</p><h3>Un lien vers un autre site</h3><p>Il est facile de reconna&#238;tre les liens sur une page : ils sont &#233;crits d\'une fa&#231;on diff&#233;rente (par d&#233;faut, en bleu et soulign&#233;s), et un curseur en forme de main appara&#238;t lorsqu\'on pointe dessus.</p><p>Je vous propose d\'essayer de coder le lien qui am&#232;ne vers OpenClassrooms, comme &#224; la figure suivante.</p><p class=\\"\\">Pour faire un lien, la balise que nous allons utiliser est tr&#232;s simple &#224; retenir :&#160;<code>&lt;a&gt;</code>&#160; . Il faut cependant lui ajouter un attribut,&#160;<code>href</code>&#160; , pour indiquer vers quelle page le lien doit conduire.</p><p class=\\"\\">Par exemple, le code ci-dessous est un lien qui am&#232;ne vers&#160;OpenClassrooms, situ&#233; &#224; l\'adresse&#160;<code>https://openclassrooms.com</code>&#160; :</p><pre class=\\"\\"><code>&lt;a href=&#34;https://openclassrooms.com&#34;&gt;OpenClassrooms&lt;/a&gt;</code></pre><p class=\\"hoveredCourseElement\\">Nous allons placer ce lien au sein d\'un paragraphe. Voici donc comment reproduire l\'exemple de la figure pr&#233;c&#233;dente :</p>',
    courseId: 1
  }, {
    id: 2,
    title: 'section2',
    container: '<p>Au chapitre pr&#233;c&#233;dent, vous avez appris &#224; cr&#233;er une page HTML toute simple. D\'accord, elle n\'&#233;tait pas franchement magnifique, mais c\'&#233;tait une vraie page HTML quand m&#234;me.</p><p>Comme vous le savez, un site web est compos&#233; de plusieurs pages. Comment faire pour aller d\'une page vers une autre ? &#192; l\'aide d\'un lien, pardi ! Dans ce chapitre, nous allons justement apprendre &#224; cr&#233;er des liens entre nos pages.</p><p>Je suppose que chacun d\'entre vous sait ce qu\'est un lien : il s\'agit d\'un texte sur lequel on peut cliquer pour se rendre sur une autre page.<br>On peut faire un lien d\'une page&#160;<code>a.html</code>&#160; vers une page&#160;<code>b.html</code>&#160; , mais on peut aussi faire un lien vers un autre site (par exemple,&#160;<code>http://www.siteduzero.com</code>&#160; ). Dans les deux cas, nous allons voir que le fonctionnement est le m&#234;me.</p><h3>Un lien vers un autre site</h3><p>Il est facile de reconna&#238;tre les liens sur une page : ils sont &#233;crits d\'une fa&#231;on diff&#233;rente (par d&#233;faut, en bleu et soulign&#233;s), et un curseur en forme de main appara&#238;t lorsqu\'on pointe dessus.</p><p>Je vous propose d\'essayer de coder le lien qui am&#232;ne vers OpenClassrooms, comme &#224; la figure suivante.</p><p class=\\"\\">Pour faire un lien, la balise que nous allons utiliser est tr&#232;s simple &#224; retenir :&#160;<code>&lt;a&gt;</code>&#160; . Il faut cependant lui ajouter un attribut,&#160;<code>href</code>&#160; , pour indiquer vers quelle page le lien doit conduire.</p><p class=\\"\\">Par exemple, le code ci-dessous est un lien qui am&#232;ne vers&#160;OpenClassrooms, situ&#233; &#224; l\'adresse&#160;<code>https://openclassrooms.com</code>&#160; :</p><pre class=\\"\\"><code>&lt;a href=&#34;https://openclassrooms.com&#34;&gt;OpenClassrooms&lt;/a&gt;</code></pre><p class=\\"hoveredCourseElement\\">Nous allons placer ce lien au sein d\'un paragraphe. Voici donc comment reproduire l\'exemple de la figure pr&#233;c&#233;dente :</p>',
    courseId: 1
  }, {
    id: 3,
    title: 'section3',
    container: 'containe3',
    courseId: 1
  }];

  courses: CourseModel[] = [{
    idcour: 1,
    title: 'course11',
    description: 'course1 -- 14h',
    image: null,
    parcoursId: 1,
    sections: [this.sections[0], this.sections[1], this.sections[2]]
  }, {
    idcour: 2,
    title: 'course22',
    description: 'course2 -- 15h',
    image: null,
    parcoursId: 1,
    sections: [this.sections[1], this.sections[2]]
  }, {
    idcour: 3,
    title: 'course33',
    description: 'course3 -- 5h',
    image: null,
    parcoursId: 1,
    sections: [this.sections[0]]
  }, {
    idcour: 4,
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
