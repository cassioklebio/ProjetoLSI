import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){
      if(usuario.email === 'usuario@gmail.com' && usuario.senha === '123456'){

            this.usuarioAutenticado = true;
            this.router.navigate(['home']);
      }else {
            this.usuarioAutenticado = false;
            
      }

  }
}
