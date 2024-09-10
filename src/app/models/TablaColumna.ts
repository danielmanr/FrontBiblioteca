import { BibliotecaResponse } from "./Biblioteca";
import { LibroResponse } from "./Libro";

export interface Accion<T = any>{
    accion : string;
    fila?: T;
}


export const getEntityPropiedades = (entidad: string): Array<any> => {
    let resultados: any = [];
    let clase: any;
  
    switch(entidad){
      case 'libro':
        clase = new LibroResponse(); break;
      case 'biblioteca':
        clase = new BibliotecaResponse(); break;
  
    }
  
    if(clase){
      resultados = Object.keys(clase);
    }
    return resultados
  }