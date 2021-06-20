import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AngularEditorConfig} from "@kolkov/angular-editor";
import {CourseModel} from '../../../core/models/course/course-model/course-model';
import {SectionModel} from "../../../core/models/course/section-model/section-model";
import {CourseService} from "../../../core/services/course-service/course.service";
import {Observable} from "rxjs";
import {AppDataState} from "../../../state/client.state";
@Component({
  selector: 'app-create-section',
  templateUrl: './create-section.component.html',
  styleUrls: ['./create-section.component.css']
})
export class CreateSectionComponent implements OnInit {
  check =0;
  validateForm!: FormGroup;
  section!: SectionModel;
  Cours : any=[];
  htmlContent1 = '';
  coureId : any ;
  saved:any;
  loading: boolean = false;
  errorMessage: any;
  //public sectionListe:any=[];
  public sectionListe:SectionModel[] =[];
  public objectKeys = Object.keys;


  constructor(private formBuilder: FormBuilder,private courseService:CourseService) { }

  ngOnInit(): void {
    this.ongetCoures(1);
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
          id : undefined ,
          title : data.titre,
          contenu: data.contenu,
        }
       this.sectionListe.push(this.section);
        // @ts-ignore
        let index:number = this.listOfCours.findIndex(item=>item.id==data.cours.id);




      }
      else if(this.check==0){
        this.coureId = data.cours.idcour
        this.onSaveSections(this.coureId,this.sectionListe)

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
  ongetCoures(idprof:number){
    this.loading = true;
    this.errorMessage = "";
    this.courseService.GetCoures(idprof)
      .subscribe(
        (response) => {                           //next() callback
          console.log('response received')
          this.Cours = response;
        },
        (error) => {                              //error() callback
          console.error('Request failed with error')
          this.errorMessage = error;
          this.loading = false;
        },
        () => {                                   //complete() callback
          console.error('Request completed')      //This is actually not needed
          this.loading = false;
        })
  }

  onSaveSections(idCoure:number,data:any){
    this.courseService.SaveSection(idCoure, data).subscribe(data => {
      this.saved = data;
      this.validateForm.reset();
      window.location.reload();
      alert('succsess')
    })


  }
}
