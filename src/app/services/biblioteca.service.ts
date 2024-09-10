import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBiblioteca } from '../models/Biblioteca';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {

  constructor(private http: HttpClient) { }

  obtenerBibliotecasList(): Observable<IBiblioteca[]>{
    return this.http.get<IBiblioteca[]>("../../assets/data/bibliotecas-list.json");
  }

}
