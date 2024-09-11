import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Accion } from '../../models/TablaColumna';
import { LibroService } from '../../services/libro.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-tabla-data',
  standalone: true,
  imports: [],
  templateUrl: './tabla-data.component.html',
  styleUrl: './tabla-data.component.css'
})
export class TablaDataComponent {

  title = '';
  columns : string[] = [];
  dataSourse : any = [];

  constructor(private libroService: LibroService, private router:Router){}



  @Input() set titulo(title: any){
    this.title = title;
  }

  @Input() set column(column: string[]){
    this.columns = column.filter(col => col != '_ObjectId');
  }

  @Input() set data(data: any){
    this.dataSourse = data;
  }

 

  @Output() action: EventEmitter <Accion> = new EventEmitter();

  onAction(row?: any){
    const id = row._ObjectId;
    console.log(id);
    this.libroService.eliminarLibro(id).subscribe({
      next: (data) => {
        this.reloadPage();
        this.router.navigate(['/'])
      },error: (err) => {
        console.error('Error al crear libro', err.message);
      }
  });
}


activarLibro(row?: any){
  const id = row._ObjectId;
    console.log(id);
    this.libroService.eliminarLibro(id).subscribe({
      next: (data) => {
        this.reloadPage();
        this.router.navigate(['/'])
      },error: (err) => {
        console.error('Error al crear libro', err.message);
      }
  });
}

reloadPage():void {
  window.location.reload();
}


}
