import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Etudiant } from '../model/etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantServiceService {

  constructor(private http: HttpClient) { }

  addEtudiant(etudiant: Etudiant) {
    console.log("Test Services"+JSON.stringify(etudiant));
    return this.http.post("http://localhost:8080/etudiant/ajout", etudiant)
  }
}
