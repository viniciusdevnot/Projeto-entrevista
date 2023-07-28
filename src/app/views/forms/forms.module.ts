import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';
import { FlexLayoutModule } from '@angular/flex-layout';
import { QuillModule } from 'ngx-quill';
import { FileUploadModule } from 'ng2-file-upload';

import { RequestsComponent } from './Requests/requests.component';
import { EfeitosComponent } from './efeitos-visuais/efeitos.component';
import { TestesUnitarios } from './testes-unitarios/testes-unitarios.component';

import { FormsRoutes } from './forms.routing';
import { WizardComponent } from './wizard/wizard.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { EfeitosComponentAuxiliarComponent } from '../efeitos-component-auxiliar/efeitos-component-auxiliar.component';
import { ButtonEfeitoComponent } from '../button-efeito/button-efeito.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatStepperModule,
    MatExpansionModule,
    FlexLayoutModule,
    QuillModule.forRoot(),
    FileUploadModule,
    RouterModule.forChild(FormsRoutes),
  ],
  declarations: [EfeitosComponent, TestesUnitarios, WizardComponent, RequestsComponent,EfeitosComponentAuxiliarComponent, ButtonEfeitoComponent],
})
export class AppFormsModule {}
