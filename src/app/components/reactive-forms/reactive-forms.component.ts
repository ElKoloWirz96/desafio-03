import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent implements OnInit {
  userForm!: FormGroup;

  constructor (private fb: FormBuilder) {}

  ngOnInit (): void {
    this.userForm = this.fb.group ({
      user: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    alert('Iniciando sesion' + JSON.stringify(this.userForm.value));
  }

  //[x: string]: any;
  //userForm = this.formBuilder.group({
  //User: this['formbuilder'].control(''),
  //password: this['formbuilder'].control('')
};
