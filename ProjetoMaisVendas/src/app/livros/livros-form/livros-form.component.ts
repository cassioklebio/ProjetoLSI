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

    this.formularioLivro = new FormGroup({
      inputTitulo: new FormControl(null,[Validators.required,Validators.minLength(10),Validators.maxLength(100)]),
      inputSubTituloail: new FormControl(null,[Validators.required,Validators.minLength(10),Validators.maxLength(100)]),
      inputAno: new FormControl(null,Validators.required),
      inputEdicao:new FormControl(null,Validators.required),
      inputPaginas: new FormControl(null,Validators.required),
      inputQuantidade: new FormControl(null, Validators.required),
      inputEditora: new FormControl(null, Validators.required),
      inputISBN: new FormControl(null, Validators.required),
      inputStatus:new FormControl(null, Validators.required),
      inputPreco: new FormControl(null, Validators.required),
      inputFotoFile: new FormControl(null, Validators.required),
      inputDescricao: new FormControl(null,[Validators.required,Validators.minLength(30),Validators.maxLength(200)])
    });

    /*this.formularioLivros = this.formBuilder.group({
      inputTitulo: [null],
      eminputSubTituloail: [null],
      inputAno: [null],
      inputEdicao: [null],
      inputPaginas: [null],
      inputQuantidade: [null],
      inputEditora: [null],
      inputISBN: [null],
      inputStatus:[null],
      inputPreco:[null],
      inputFotoFile:[null],
      inputDescricao:[null]
    });*/
  }

  onSubimit(){
    console.log(this.formularioLivro);
  }

}
