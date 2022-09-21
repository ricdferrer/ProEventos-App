import { ValidatorField } from './../../../helpers/validator-field';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  AbstractControlOptions,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form = new FormGroup({
    primeiroNome: new FormControl(),
    ultimoNome: new FormControl(),
    email: new FormControl(),
    usuario: new FormControl(),
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
        primeiroNome: [null, Validators.required],
        ultimoNome: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
        usuario: [null, [Validators.required, Validators.minLength(3)]],
        senha: [null, [Validators.required, Validators.minLength(6)]],
        confirmeSenha: [null, Validators.required],
      },
      formOptions
    );
  }
}
