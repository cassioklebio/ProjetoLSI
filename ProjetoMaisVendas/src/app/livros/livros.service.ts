import { Livro } from './Livro';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LivrosService {

constructor(private http: HttpClient) { }

/*listar os livros cadastrados*/
list() {
  return null;

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
/*metodo para imprimir*/
imprimir() {
  return null;
}
}
