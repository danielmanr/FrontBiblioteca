import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Router, ActivatedRoute } from '@angular/router'; // Se agregó ActivatedRoute
import { LibroService } from '../../services/libro.service';
import { ILibro } from '../../models/Libro';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, HttpClientModule], // Asegúrate de que esté aquí
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  public id!: number;
  public _ObjectId!: string; // Definirlo normalmente
  private servicioLibro = inject(LibroService);
  private route = inject(ActivatedRoute); // Inyectamos ActivatedRoute
  public formBuild = inject(FormBuilder);

  public formLibro: FormGroup = this.formBuild.group({
    nombre: [''],
    genero: [''],
    estado: [true]
  });

  constructor(private libroService: LibroService, private router:Router) {}

  ngOnInit(): void {
    // Obtener el parámetro 'id' de la URL
    this.route.params.subscribe(params => {
      this.id = +params['id']; // '+' convierte el string a number
      this._ObjectId = params['_ObjectId']; // Obtener el ObjectId desde la URL si es necesario
      console.log('ID obtenido de la URL:', this.id);

      if (this.id !== 0) {
        this.servicioLibro.obtenerLibroId(this._ObjectId).subscribe({
          next: (data) => {
            this.formLibro.patchValue({
              nombre: data.nombre,
              genero: data.genero,
              estado: data.estado
            });
          },
          error: (err) => {
            console.error('Error al obtener el libro:', err.message); // Corregido el acceso a err.message
          }
        });
      }
    });
  }

  guardar() {
    this.obtenerNuevoId().subscribe({
      next: (nuevoId) => {
        const objeto: ILibro = {
          _ObjectId: "", // O `null` si estás creando uno nuevo
          id: nuevoId,
          nombre: this.formLibro.value.nombre,
          genero: this.formLibro.value.genero,
          estado: this.formLibro.value.estado   
        };
  
        if (this.id == 0) {
          this.servicioLibro.crearLibro(objeto).subscribe({
            next: (data) => {
              this.router.navigate(['/']);
            },
            error: (err) => {
              console.error('Error al crear libro', err.message);
            }
          });
        } else {
          // Lógica para editar
          this.servicioLibro.editarLibro(this._ObjectId, objeto).subscribe({
            next: (data) => {
              this.router.navigate(['/']);
            },
            error: (err) => {
              console.error('Error al editar libro', err.message); // Corregido err.message
            }
          });
        }
      },
      error: (err) => {
        console.error('Error al obtener nuevo ID', err);
      }
    });
  }

  obtenerNuevoId(): Observable<number> {
    return this.servicioLibro.obtenerId(); // Retorna el Observable directamente
  }
}