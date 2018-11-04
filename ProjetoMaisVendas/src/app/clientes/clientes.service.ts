import { Cliente } from './Cliente';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MockNgModuleResolver } from '@angular/compiler/testing';
import { NullAstVisitor } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private readonly API = 'http://localhost:3000/clientes';

  constructor(private http: HttpClient) { }



  /*listar os livros cadastrados*/
list() {
  return this.http.get<Cliente[]>(this.API);

}

/*metodo para salvar */
save() {
  return null;
}
/*metodo para update */
update() {
  return null;
}

/*metodo para delete*/
delete() {
  return null;
}

imprimir() {
  return null;
}
}
