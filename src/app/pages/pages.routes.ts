import { Routes, RouterModule } from "@angular/router";


import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { GerenteComponent } from "./gerente/gerente.component";
import { DenunciasComponent } from "./denuncias/denuncias.component";
import { SubgerenteComponent } from "./subgerente/subgerente.component";




const PagesRoutes: Routes = [
    { path: '',
     component: PagesComponent,
     children:[
        { path: 'dashboard', component: DashboardComponent},
        { path: 'gerente', component: GerenteComponent},
        { path: 'denuncias', component: DenunciasComponent},
        { path: 'subgerente', component: SubgerenteComponent},
        { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
     ]
    },
];

export const PAGES_ROUTES = RouterModule.forChild(PagesRoutes);