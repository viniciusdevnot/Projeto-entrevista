import { Routes } from '@angular/router';

import { RequestsComponent } from './Requests/requests.component';
import { EfeitosComponent } from './efeitos-visuais/efeitos.component';
import { TestesUnitarios } from './testes-unitarios/testes-unitarios.component';
import { WizardComponent } from './wizard/wizard.component';

export const FormsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basic',
        component: RequestsComponent,
        data: { title: 'Basic', breadcrumb: 'REQUESTS' }
      },
      {
        path: 'efeitos',
        component: EfeitosComponent,
        data: { title: 'Efeitos Visuais', breadcrumb: 'EFEITOS' }
      }, {
        path: 'testes',
        component: TestesUnitarios,
        data: { title: 'testes', breadcrumb: 'TESTES' }
      }, {
        path: 'wizard',
        component: WizardComponent,
        data: { title: 'Wizard', breadcrumb: 'WIZARD' }
      }]
  }
];