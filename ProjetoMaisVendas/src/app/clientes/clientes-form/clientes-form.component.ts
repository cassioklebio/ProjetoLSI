import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  formularioClientes: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.configurarFormularioCliente();
  }
  configurarFormularioCliente() {
    this.formularioClientes = this.formBuilder.group({
      inputNome: [null, Validators.required, Validators.minLength(10), Validators.maxLength(100)],
      inputDataNascimento: [null, Validators.required],
      inputCPF: [null, Validators.required],
      inputMatricula: [null, Validators.required],
      inputPeriodo: [null, Validators.required],
      inputTelefone1: [null, Validators.required],
      inputTelefone2: [null, Validators.required],
      inputRua: [null],
      inputCep: [null],
      inputEstado: [null],
      inputCidade: [null],
      inputBairro: [null],
      inputPontoReferencia: [null]
    });
  }
  onSubmit() {
  }

}
