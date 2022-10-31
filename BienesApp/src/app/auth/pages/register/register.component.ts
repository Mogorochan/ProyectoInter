import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
})
export class RegisterComponent {
  miFormulario: FormGroup = this.fb.group({
    name: ['Natalia', [Validators.required]],
    email: ['test16@testing.com', [Validators.required, Validators.email]],
    password: ['12345678', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  registro() {
    const { name, email, password } = this.miFormulario.value;

    this.authService.registro(name, email, password)
    .subscribe((ok) => {
      if (ok === true) {
        this.router.navigateByUrl('/login');
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Registro exitoso',
          showConfirmButton: false,
          timer: 1500
        })
      } else {
        Swal.fire('Error', ok, 'error');
      }
    });
  }
}
