import { Livro } from './Livro';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  private readonly API = 'http://localhost:3000/livros';

constructor(private http: HttpClient) { }

/*listar os livros cadastrados*/
list() {
  return this.http.get<Livro[]>(this.API);

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
