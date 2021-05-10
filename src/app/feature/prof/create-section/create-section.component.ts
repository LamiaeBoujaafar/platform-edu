import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AngularEditorConfig} from "@kolkov/angular-editor";
import {CourseModel} from "../../../core/models/course/course-model/course-model";
import {SectionModel} from "../../../core/models/course/section-model/section-model";
@Component({
  selector: 'app-create-section',
  templateUrl: './create-section.component.html',
  styleUrls: ['./create-section.component.css']
})
export class CreateSectionComponent implements OnInit {
  check =0;
  validateForm!: FormGroup;
  section!: SectionModel;
  listOfCours:CourseModel[]=[
    {
      id : 0,
      sections : [],
      title : "java",
      parcoursId : 0,
      description:"cour java",
      image: null

    },
    {
      id :1,
      sections : [],
      title : "php",
      parcoursId : 0,
      description:"cour php",
      image: null

    },
  ];
  htmlContent1 = '';
  //public sectionListe:any=[];
  public sectionListe:SectionModel[] =[];
  public objectKeys = Object.keys;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.validateForm = this.formBuilder.group({
      contenu: ['', Validators.required],
      cours: [null, [Validators.required]],
      titre: [null, [Validators.required]],



    });
  }

  submitForm(data: any) {
    if (data.contenu != '' && data.cours != '' && data.titre != '') {
      if (this.check==1){
        this.section={
          id : 0 ,
          courseId: data.cours.id,
          title : data.titre,
          container: data.contenu,
        }
       this.sectionListe.push(this.section);
        // @ts-ignore
        let index:number = this.listOfCours.findIndex(item=>item.id==data.cours.id);

      this.listOfCours[index].sections= this.sectionListe;
        console.log(this.listOfCours);
        console.log(this.sectionListe);

      }
      else if(this.check==0){
        //SAVE TO DB AND CLERE LISTE
        this.sectionListe.length=0;


    }

  }
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();

    }
  }

  delete(i: number) {
    this.sectionListe.splice(i, 1)

    console.log( this.sectionListe);

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

  onAddNewSection(): void  {
    this.check=  1;
  }

  onSave(): void {

    this.check= 0 ;

  }
}
