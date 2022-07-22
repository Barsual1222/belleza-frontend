import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { AccesoComponent } from './acceso/acceso.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { ChangePasswordComponent } from './change-password/change-password.component';


@NgModule({
  declarations: [
    AccesoComponent,
    CerrarSesionComponent,
    PasswordResetComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule
  ]
})
export class SeguridadModule { }
