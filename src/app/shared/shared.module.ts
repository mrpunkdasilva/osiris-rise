import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Components
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { AlertComponent } from './components/alert/alert.component';

// Directives
import { ClickOutsideDirective } from './directives/click-outside.directive';

@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    AlertComponent,
    ClickOutsideDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    LoadingSpinnerComponent,
    AlertComponent,
    ClickOutsideDirective
  ]
})
export class SharedModule { }