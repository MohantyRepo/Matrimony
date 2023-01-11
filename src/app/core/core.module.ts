import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    ReactiveFormsModule
  ]
})
export class CoreModule { }
