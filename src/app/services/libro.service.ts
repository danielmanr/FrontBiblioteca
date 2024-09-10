import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILibro } from '../models/Libro';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  private apiUrl = 'http://localhost:5077/api/Libros';

  constructor(private http: HttpClient) { }

  obtenerLibrosList(): Observable<ILibro[]>{
    return this.http.get<ILibro[]>(`${this.apiUrl}`);
  }

  obtenerLibroId(id:string){
    return this.http.get<ILibro>(`${this.apiUrl}/${id}`);
  }

  crearLibro(datos: ILibro): Observable<ILibro>{
    return this.http.post<ILibro>(`${this.apiUrl}`,datos);
  }

  editarLibro(id:string, datos: ILibro): Observable<ILibro>{
    return this.http.put<ILibro>(`${this.apiUrl}`,datos)
  }

  obtenerId(): Observable<number>{
    return this.http.get<number>(`${this.apiUrl}/NuevoId`);
  }
}
