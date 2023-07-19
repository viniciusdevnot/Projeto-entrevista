import { Routes } from "@angular/router";

import { InicioComponent } from "./inicio/inicio.component";

export const DashboardRoutes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent,
    data: { title: 'Inicio', breadcrumb: 'Inicio'}
  }
];
