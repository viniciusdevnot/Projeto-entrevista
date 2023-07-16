import { Routes } from "@angular/router";

import { InicioComponent } from "./inicio/inicio.component";

export const DashboardRoutes: Routes = [
  {
    path: "analytics",
    component: InicioComponent,
    data: { title: 'Analytics', breadcrumb: 'Analytics'}
  }
];
