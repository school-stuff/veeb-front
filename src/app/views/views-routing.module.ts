import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const viewsRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(viewsRoutes),
    ],
    exports: [
        RouterModule,
    ],
})
export class ViewsRoutingModule {}
