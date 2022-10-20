import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent{

  miFormulario: FormGroup = this.fb.group({
    email: ['test@testing.com', [Validators.required, Validators.email]],
    password: ['12345678', [Validators.required, Validators.minLength(8)]],
  });

  constructor(private fb: FormBuilder,
              private router: Router,) { }

  login(){
    console.log(this.miFormulario.value);
    console.log(this.miFormulario.valid);
    const {email, password} = this.miFormulario.value;

    this.router.navigateByUrl('/rotacion');
  }
}
