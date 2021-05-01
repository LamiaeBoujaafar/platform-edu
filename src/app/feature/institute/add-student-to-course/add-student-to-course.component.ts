import { Component, OnInit } from '@angular/core';
interface ItemData {
  id: string;
  etudiant: string;
  parcour: string;
  cour: string;
}

@Component({
  selector: 'app-add-student-to-course',
  templateUrl: './add-student-to-course.component.html',
  styleUrls: ['./add-student-to-course.component.css']
})
export class AddStudentToCourseComponent implements OnInit {
  selectedParcour=""
  parcours=["visa","toefl","bac"];
  cours: { [parcour: string]: string[] } = {
    visa: ['B1', 'B2', 'B3'],
    toefl: ['t1', 't2', 't3'],
    bac:['c1','c2','c3']
  };

  etudaints= ["Oussama goumghar","Lamiaa Boujaafar","Mohamed Erraji"]
  selectedCour="";
  selectedEtudaint="";



  constructor() { }

  ngOnInit(): void {
    this.addRow();
    this.addRow();
  }

  parkourChange(value: string): void {
    this.selectedCour = this.cours[value][0];
  }


  i = 0;
  editId: string | null = null;
  listOfData: ItemData[] = [];

  startEdit(id: string): void {
    this.editId = id;
  }

  stopEdit(): void {
    this.editId = null;
  }

  addRow(): void {
    this.listOfData = [
      ...this.listOfData,
      {
        id: `${this.i}+1`,
        etudiant: this.selectedEtudaint,
        parcour: this.selectedParcour,
        cour: this.selectedCour
      }
    ];
    this.i++;
  }

  deleteRow(id: string): void {
    this.listOfData = this.listOfData.filter(d => d.id !== id);
  }
}
