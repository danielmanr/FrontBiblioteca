import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Accion } from '../../models/TablaColumna';


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

  onAction(accion: string, row?: any){
    this.action.emit({accion:accion, fila:row});
  }

}
