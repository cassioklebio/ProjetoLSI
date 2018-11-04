import { Cliente } from './../Cliente';
import { Component, OnInit } from '@angular/core';
import { ClientesService } from './../clientes.service';



@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {

  clientes: Cliente[];

  constructor( private clienteservice: ClientesService ) { }

  ngOnInit() {
    this.clienteservice.list()
    .subscribe(dados => this.clientes = dados);
  }
}


