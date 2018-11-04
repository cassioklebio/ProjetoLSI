import { LivrosService } from './../livros.service';
import { Component, OnInit } from '@angular/core';
import { Livro } from '../Livro';

@Component({
  selector: 'app-livros-lista',
  templateUrl: './livros-lista.component.html',
  styleUrls: ['./livros-lista.component.css']
})
export class LivrosListaComponent implements OnInit {

  livros: Livro[];

 constructor( private livroservice: LivrosService ) { }

  ngOnInit() {
    this.livroservice.list()
      .subscribe(dados => this.livros = dados);
  }

}
