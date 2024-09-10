import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core'; // Importa esta función para manejar los módulos
import { routes } from './app/app.routes'; // Importa las rutas directamente

const appConfig = {
  providers: [
    importProvidersFrom(HttpClientModule), // Proporciona el HttpClientModule correctamente
    provideRouter(routes) // Usa las rutas directamente aquí
  ]
};

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));