import { Component } from '@angular/core';
import { Etudiant } from 'src/app/model/etudiant';
import { EtudiantServiceService } from 'src/app/services/etudiant-service.service';

@Component({
  selector: 'app-form-etudiant', // C'est le nom de la balise dans app.compose.html
  templateUrl: './form-etudiant.component.html',
  styleUrls: ['./form-etudiant.component.scss']
})
export class FormEtudiantComponent {

  etudiant: Etudiant = {} as Etudiant;

  constructor(private service: EtudiantServiceService){}

  addStudent() {
    console.log(this.etudiant)
    this.service.addEtudiant(this.etudiant);
  }
}
