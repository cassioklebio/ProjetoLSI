import { Cidade } from './../../shared/models/cidades';
import { DropdownService } from './../../shared/dropdown.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Http } from '@angular/http';
import { EstadoBr } from './../../shared/models/estado-br.model';
import { Observable, empty } from 'rxjs';
import { map, tap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  formularioClientes: FormGroup;
  estados: EstadoBr[];
  cidades: Cidade[];

  constructor(
    private formBuilder: FormBuilder,
    private http: Http,
    private dropdownService: DropdownService) { }

  ngOnInit() {

    this.dropdownService.getEstadosBr()
      .subscribe(dados => this.estados = dados);

    this.formularioClientes = this.formBuilder.group({
      inputNome: [null, ],
      inputDataNascimento: [null, Validators.required],
      inputCPF: [null, Validators.required],
      inputMatricula: [null, Validators.required],
      inputPeriodo: [null, Validators.required],
      inputTelefone1: [null, Validators.required],
      inputTelefone2: [null, Validators.required],
      inputCep: [null, Validators.required],
      inputRua: [null, Validators.required],
      estado: [Validators.required],
      inputCidade: [Validators.required ],
      inputBairro: [null, Validators.required],
      inputPontoReferencia: [null, Validators.required]
    });


    this.formularioClientes.get('formularioClientes.estado').valueChanges
    .pipe(
      tap(estado => console.log('Novo estado: ', estado)),
      map(estado => this.estados.filter(e => e.sigla === estado)),
      map(estados => estados && estados.length > 0 ? estados[0].id : empty),
      switchMap((estadoID: number) => this.dropdownService.getCidades(estadoID)))
        .subscribe(cidades => this.cidades = cidades);
    }
  onSubmit() { }
  verificaValidTouched(campo) {
    return !this.formularioClientes.get(campo).valid && this.formularioClientes.get(campo).touched;

  }
  aplicaCssErro(campo) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }
}