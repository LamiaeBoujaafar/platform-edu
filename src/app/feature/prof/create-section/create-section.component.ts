import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AngularEditorConfig} from '@kolkov/angular-editor';
import {CourseModel} from '../../../core/models/course/course-model/course-model';
import {SectionModel} from '../../../core/models/course/section-model/section-model';
import {CourseService} from '../../../core/services/course-service/course.service';
import {Course} from '../../../core/models/course/course-model/course';
import {NzModalService} from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-create-section',
  templateUrl: './create-section.component.html',
  styleUrls: ['./create-section.component.css']
})
export class CreateSectionComponent implements OnInit {
  check = 0;
  validateForm!: FormGroup;
  section!: SectionModel;
  listOfCourses !: Course[];

  constructor(private formBuilder: FormBuilder, private courseService: CourseService, private modal: NzModalService) {
  }


  htmlContent1 = '';
  public sectionListe: SectionModel[] = [];
  public objectKeys = Object.keys;


  ngOnInit(): void {
    this.validateForm = this.formBuilder.group({
      contenu: ['', Validators.required],
      cours: [null, [Validators.required]],
      titre: [null, [Validators.required]],
    });

    this.courseService.getCoursesFromDb().subscribe(data => {
      this.listOfCourses = data;
    });

  }

  submitForm(data: any) {
    if (data.contenu != '' && data.cours != '' && data.titre != '') {
      if (this.check == 1) {
        this.section = {
          id: 0,
          title: data.titre,
          coursId: data.cours.id,
          contenu: data.contenu,
        };
        this.sectionListe.push(this.section);
        // @ts-ignore
        let index: number = this.listOfCourses.findIndex(item => item.id == data.cours.id);

        this.listOfCourses[index].section = this.sectionListe;
        this.validateForm.reset();

      } else if (this.check == 0) {
        //SAVE TO DB AND CLERE LISTE


        for (var sect of this.sectionListe) {
          console.log(sect)
          this.saveSection(sect)
        }
        this.modal.success({
          nzTitle: 'add sections',
          nzContent: 'The sections are successfully added'
        });

        this.sectionListe.length = 0;

      }

    }
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();

    }
  }

  saveSection(section :SectionModel) {

      this.courseService.postSection(section).subscribe(data => {
        console.log(data);
      });



  }

  delete(i: number) {
    this.sectionListe.splice(i, 1);

  }

  onAddNewSection(): void {
    this.check = 1;
  }

  onSave(): void {

    this.check = 0;

  }

  config1: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    minHeight: '50rem',
    maxHeight: '300rem',
    placeholder: 'Enter text here...',
    translate: 'yes',
    sanitize: true,
    // toolbarPosition: 'top',
    outline: true,
    defaultFontName: 'Comic Sans MS',
    defaultFontSize: '5',
    // showToolbar: false,
    defaultParagraphSeparator: 'p',
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    fonts: [
      {class: 'arial', name: 'Arial'},
      {class: 'times-new-roman', name: 'Times New Roman'},
      {class: 'calibri', name: 'Calibri'},
      {class: 'comic-sans-ms', name: 'Comic Sans MS'}
    ],


  };
}
