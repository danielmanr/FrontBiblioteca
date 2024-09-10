export interface IBiblioteca {
    nombre: string;
    ciudad: string;
    libros: string[];
}

export class BibliotecaResponse {
    nombre = '';
    ciudad = '';
    libros = [];
}