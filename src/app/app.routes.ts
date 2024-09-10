import { RouterModule,Routes } from '@angular/router';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { LibroResponse } from './models/Libro';
import { LibrosComponent } from './components/libros/libros.component';
import ListaLibrosComponent from './pages/lista-libros/lista-libros.component';

export const routes: Routes = [
    {
        path:"",
        redirectTo: '/libros', pathMatch : 'full'
    },
    {
        path:'libros',
        loadComponent:() => import('./pages/lista-libros/lista-libros.component'),
    },
    {
        path:'libros/crearLibro/:id',
        component: FormularioComponent
    },
    {
        path:'bibliotecas',
        loadComponent: () => import('./pages/lista-biblioteca/lista-biblioteca.component'),
    },
    {
        path:"**",
        redirectTo: '/libros'
    }


];

export const AppRoutingModule = RouterModule.forRoot(routes);
