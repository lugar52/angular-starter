import { Component, inject } from '@angular/core';
import { AccessService } from '../../../services/access.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { TransferdataService } from '../../../services/transferdata.service'

import { Login } from '../../../model/login';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private accesoService = inject(AccessService)
  private transferdataService = inject(TransferdataService)


  private router = inject(Router)
  private formBuild = inject(FormBuilder);

  public formLogin: FormGroup = this.formBuild.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })


  IniciarSesion(){
    if(this.formLogin.invalid) return;

    const objeto:Login = {
      username: this.formLogin.value.email,
      password: this.formLogin.value.password
    }

    this.accesoService.login(objeto).subscribe({
      next:(data) => {
        console.log(data)
        if (data.IsSuccess) {
          localStorage.setItem("token", data.token)
          localStorage.setItem("user", this.formLogin.value.email)
          localStorage.setItem("proveedor", "1")

          this.transferdataService.actualizarDato(true);
          this.router.navigate(['perneria-new'])
        }else{
          alert("Credenciales son incorrectas")
        }
      },
      error:(err) => {
        console.log(err.message);
      }
    })
  }

  Registrarse(){
    this.router.navigate(['registro'])
  }
}
