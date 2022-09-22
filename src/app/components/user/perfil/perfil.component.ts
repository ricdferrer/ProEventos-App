import {
  AbstractControlOptions,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ValidatorField } from '@app/helpers/validator-field';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {
  form = new FormGroup({
    especialidade: new FormControl(),
    nome: new FormControl(),
    sobreNome: new FormControl(),
    email: new FormControl(),
    telefone: new FormControl(),
    funcao: new FormControl(),
    descricao: new FormControl(),
    senha: new FormControl(),
    confirmeSenha: new FormControl(),
  });

  get f(): any {
    return this.form.controls;
  }
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validation();
  }

  private validation(): void {
    const formOptions: AbstractControlOptions = {
      validators: ValidatorField.MustMatch('senha', 'confirmeSenha'),
    };
    this.form = this.fb.group(
      {
        especialidade: [null, Validators.required],
        nome: [null, [Validators.required, Validators.minLength(3)]],
        sobreNome: [null, [Validators.required, Validators.minLength(3)]],
        email: [null, [Validators.required, Validators.email]],
        telefone: [null, Validators.required],
        funcao: [null, Validators.required],
        descricao: [null, Validators.required],
        senha: [Validators.required, Validators.minLength(6)],
        confirmeSenha: [null, Validators.required],
      },
      formOptions
    );
  }

  onSubmit(): void {
    if(this.form.invalid){
      return;
    }
  }
  resetForm(event: any): void {
    event.preventDefault();
    this.form.reset();

  }
}
