import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegistroComponent } from './components/registro/registro.component';
import { QuienSoyComponent } from './components/quien-soy/quien-soy.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full', // Redirecciona localhost:4200 a /home
    },
    {
        path: 'home',
        // component: HomeComponent,
        loadComponent: () =>
        import('./components/home/home.component').then(m => m.HomeComponent),
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'registro',
        component: RegistroComponent,
    },
    {
        path: 'quien-soy',
        component: QuienSoyComponent,
    },
    // {
    //     path: 'juegos',
    //     loadComponent: () =>
    //     import('./components/juegos/juego.component').then(m => m.JuegoComponent),
    //     children: 
            // [
                // {
                //         path: 'ahorcado',
                //         component: JuegoAhorcadoComponent,
                // }, 
            // ]
    // },
    {
        path: '**', // Cualquier ruta no definida
        redirectTo: 'home',
    }
];
