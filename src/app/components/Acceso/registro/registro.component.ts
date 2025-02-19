import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors   } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';

import { AccessService } from '../../../services/access.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Usuario } from '../../../model/login';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [MatCardModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule, 
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss'
})

export class RegistroComponent {
  signupForm: FormGroup;
  message: string = '';

  constructor(private fb: FormBuilder, 
      private accessService: AccessService, 
      private router: Router,) {
    
        this.signupForm = this.fb.group({
          username: ['', Validators.required],
          password: ['', [Validators.required, Validators.minLength(6)]],
          confirmPassword: ['', Validators.required]
        }, { validators: this.passwordsIgualesValidator }); // ✅ Se aplica el validador al FormGroup
    
  }

  Registrarse() {
    if(this.signupForm.invalid) return;
    
      const objeto:Usuario = {
        username: this.signupForm.value.username,
        password: this.signupForm.value.password
      }    
  
      this.accessService.registrarse(objeto).subscribe({
        next:(data) => {
          if (data.IsSuccess) {
            this.router.navigate(['login'])
          }else{
            alert("No se pudo registrar")
          }
        },
        error:(err) => {
          console.log(err.message);
        }
      })
    } 

    passwordsIgualesValidator(group: AbstractControl): ValidationErrors | null {
      const password = group.get('password')?.value;
      const confirmPassword = group.get('confirmPassword')?.value;
      return password === confirmPassword ? null : { passwordMismatch: true }; // ❌ Si no coinciden, se asigna el error
    }
  
  Volver(){
    this.router.navigate(['login'])
  }

  onSignup() {
   
  }

}
