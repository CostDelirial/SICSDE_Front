import { NgModule } from '@angular/core';

// Modulos
import { SharedModule } from '../shared/shared.module';


import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DenunciasComponent } from './denuncias/denuncias.component';
import { GerenteComponent } from './gerente/gerente.component';
import { SubgerenteComponent } from './subgerente/subgerente.component';
import { PAGES_ROUTES } from './pages.routes';


@NgModule({
    declarations:[
        PagesComponent,
        DashboardComponent,
        DenunciasComponent,
        GerenteComponent,
        SubgerenteComponent
    ],
    exports:[
        DashboardComponent,
        DenunciasComponent,
        GerenteComponent,
        SubgerenteComponent
    ],
    imports:[
        SharedModule,
        PAGES_ROUTES
    ]
    
})

export class PagesModule{}