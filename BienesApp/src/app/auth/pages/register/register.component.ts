import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent{

  miFormulario: FormGroup = this.fb.group({
    name:['Natalia', [Validators.required]],
    email: ['test16@testing.com', [Validators.required, Validators.email]],
    password: ['12345678', [Validators.required, Validators.minLength(6)]],
  });

  constructor(private fb: FormBuilder,
              private router: Router,) { }
  
  registro(){

    console.log(this.miFormulario.value);
    console.log(this.miFormulario.valid);
    const {name, email, password} = this.miFormulario.value;

    this.router.navigateByUrl('/rotacion');
  }

}
