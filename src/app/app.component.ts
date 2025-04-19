import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet} from '@angular/router';
import { createClient } from '@supabase/supabase-js';
import { Usuarios } from './models/usuarios';
import { environment } from '../environments/environment';

const supabase = createClient(environment.apiUrl, environment.publicAnonKey);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'juegosApp';
  static usuarioLogueado: any;
  static router: any;

  // ROUTER es una instancia del SERVICIO ROUTER, se instancia una unica vez en toda la aplicacion
  // Nos permite hacer navegacion entre rutas
  constructor(private router: Router) {}

  usuario: Usuarios | null = null;
  usuarioLogueado: boolean = false;
  mostrarMensaje: boolean = false;

  
  // Consulta si hay un usuario logueado al iniciar el componente
  // Si hay un usuario logueado, obtiene su información de la base de datos
  ngOnInit(): void {
    const authUser = supabase.auth.getUser();
    authUser.then(({ data: { user } }) => {
      if (user) {
        this.usuarioLogueado = true;
        this.obtenerUsuario(user.id);
      }
    });
  }

  // Consulta la base de datos para obtener la información del usuario logueado
  // Si hay un error, lo muestra en la consola. Si no lo guarda en la variable usuario
  obtenerUsuario(authId: string) {
    supabase.from('usuarios').select('*').eq('authId', authId).single()
      .then(({ data, error }) => {
        if (error) {
          console.error('Error al obtener usuario:', error.message);
        } else {
          this.usuario = data;
        }
      });
  }

  logout() {
    supabase.auth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }
}




// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { Router, RouterOutlet } from '@angular/router';


// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet, CommonModule],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss'
// })

// export class AppComponent {
//   title = 'salaDeJuegos';

// }