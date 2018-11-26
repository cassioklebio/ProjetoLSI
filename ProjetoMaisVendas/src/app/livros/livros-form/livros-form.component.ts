import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-livros-form',
  templateUrl: './livros-form.component.html',
  styleUrls: ['./livros-form.component.css']
})
export class LivrosFormComponent implements OnInit {

  formularioLivro: FormGroup;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formularioLivro = this.formBuilder.group({
      inputTitulo: [null, Validators.required, Validators.minLength(10), Validators.maxLength(100)],
      inputSubTitulo: [null, Validators.required],
      inputAno: [null, Validators.required],
      inputEdicao: [null, Validators.required],
      inputPaginas: [null, Validators.required],
      inputQuantidade: [null, Validators.required],
      inputEditora: [null, Validators.required],
      inputISBN: [null, Validators.required],
      inputStatus: [null, Validators.required],
      inputPreco: [null, Validators.required],
      inputFotoFile: [null, Validators.required],
      inputDescricao: [null, Validators.required]
    });
  }
  onSubimit() {
    console.log(this.formularioLivro);
  }

}
