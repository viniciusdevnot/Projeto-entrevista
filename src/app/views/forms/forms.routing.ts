import { Routes } from '@angular/router';

import { RequestsComponent } from './Requests/requests.component';
import { EfeitosComponent } from './efeitos-visuais/efeitos.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
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
        path: 'upload',
        component: FileUploadComponent,
        data: { title: 'Upload', breadcrumb: 'UPLOAD' }
      }, {
        path: 'wizard',
        component: WizardComponent,
        data: { title: 'Wizard', breadcrumb: 'WIZARD' }
      }]
  }
];