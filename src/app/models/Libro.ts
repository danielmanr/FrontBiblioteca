export interface ILibro {
    _ObjectId?: string;
    id?: number;
    nombre: string;
    genero:   string;
    estado: boolean;
}


export class LibroResponse {
    _ObjectId = '';
    id = '';
    nombre= '';
    genero = '';
    estado = false;
}