import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LibroService } from '../../services/libro.service';
import { HttpClientModule } from '@angular/common/http';
import { ILibro } from '../../models/Libro';
import { Accion, getEntityPropiedades } from '../../models/TablaColumna';
import { TablaDataComponent } from '../../components/tabla-data/tabla-data.component';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-libros',
  standalone: true,
  imports: [HttpClientModule,TablaDataComponent,RouterModule,CommonModule],
  templateUrl: './lista-libros.component.html',
  styleUrl: './lista-libros.component.css',
  providers:[
    LibroService
  ]
})
export default class ListaLibrosComponent implements OnInit {
  constructor(private libroService: LibroService, private router:Router){}


  libroList : ILibro[] =[]
  columnas: string[] = [];
  title:string = 'Libro';

  ngOnInit(): void {
    this.columnas = getEntityPropiedades('libro');
    
    this.libroService.obtenerLibrosList().subscribe(data => {
      this.libroList = data;
      //console.log(this.libroList);
    })
  }

  onAction(accion: Accion) {
    if (accion.accion == 'Editar') {
     this.editar(accion.fila)
   } else if (accion.accion == 'Eliminar') {
     this.eliminar(accion.fila.autor)
   }
 }

 editar(objeto:any){
   console.log("editar", objeto)
 }

 eliminar(autor:any){
   console.log("eliminar",autor)
 }

 nuevoLibro(){
  this.router.navigate(['/libros/crearLibro',0]);

 }


}
