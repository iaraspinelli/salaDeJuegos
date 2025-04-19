import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink} from '@angular/router';
import { createClient } from '@supabase/supabase-js';
import { environment } from '../../../environments/environment';
import { AppComponent } from '../../app.component';

// Constante modulo supabase-js que permite crear un cliente para la conexion a la base de datos
const supabase = createClient(environment.apiUrl, environment.publicAnonKey);

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

// export class HomeComponent implements OnInit {

export class HomeComponent{

  // usuario: Usuarios | null = null;
  // usuarioLogueado: boolean = false;
  mostrarMensaje: boolean = false;

  // Array con la data de los juegos
  juegos = [
    {
      nombre: 'Ahorcado',
      imagen: 'img_juegos/ahorcado.jpg',
      ruta: '/juegos/ahorcado',
    },
    {
      nombre: 'Mayor o Menor',
      imagen: 'img_juegos/mayor-menor.jpg',
      ruta: '/juegos/mayor-menor',
    },
    {
      nombre: 'Preguntados',
      imagen: 'img_juegos/preguntados.jpg',
      ruta: '/juegos/preguntados',
    },
    {
      nombre: 'Cálculo Veloz',
      imagen: 'img_juegos/calculo-veloz.jpg',
      ruta: '/juegos/calculo-veloz',
    },
  ];

  // Si el usuario no está logueado, muestra un mensaje de error. Si está logueado, redirige a la ruta del juego seleccionado.
  jugar(ruta: string) {
    if (!AppComponent.usuarioLogueado) {
      this.mostrarMensaje = true;
      return;
    }
    AppComponent.router.navigate([ruta]);
  }

  cerrarMensaje() {
    this.mostrarMensaje = false;
  }

}





  // constructor(private router: Router) {  }


  // // Consulta si hay un usuario logueado al iniciar el componente
  // // Si hay un usuario logueado, obtiene su información de la base de datos
  // ngOnInit(): void {
  //   const authUser = supabase.auth.getUser();
  //   authUser.then(({ data: { user } }) => {
  //     if (user) {
  //       this.usuarioLogueado = true;
  //       this.obtenerUsuario(user.id);
  //     }
  //   });
  // }

  // // Consulta la base de datos para obtener la información del usuario logueado
  // // Si hay un error, lo muestra en la consola. Si no lo guarda en la variable usuario
  // obtenerUsuario(authId: string) {
  //   supabase.from('usuarios').select('*').eq('authId', authId).single()
  //     .then(({ data, error }) => {
  //       if (error) {
  //         console.error('Error al obtener usuario:', error.message);
  //       } else {
  //         this.usuario = data;
  //       }
  //     });
  // }

  // // Cierra la sesión del usuario logueado y redirige a la página de login.
  // logout() {
  //   supabase.auth.signOut().then(() => {
  //     this.usuario = null;
  //     this.usuarioLogueado = false;
  //     this.router.navigate(['/login']);
  //   });
  // }

