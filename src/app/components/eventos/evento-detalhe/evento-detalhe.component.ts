import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-evento-detalhe',
  templateUrl: './evento-detalhe.component.html',
  styleUrls: ['./evento-detalhe.component.scss'],
})
export class EventoDetalheComponent implements OnInit {
  form = new FormGroup({
    local: new FormControl(),
    dataEvento: new FormControl(),
    tema: new FormControl(),
    quantidadePessoas: new FormControl(),
    imageURL: new FormControl(),
    telefone: new FormControl(),
    email: new FormControl(),
  });

  get f() : any {
    return this.form.controls;
  }
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validation();
  }

  validation(): void {
    this.form = this.fb.group({
      tema: [
        null,
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(50),
        ],
      ],
      local: [null, Validators.required],
      dataEvento: [null, Validators.required],
      quantidadePessoas: [null, [Validators.required, Validators.max(120000)]],
      telefone: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      imageURL: [null, Validators.required],
    });
  }

  resetForm() : void {
    this.form.reset();
  }
}
