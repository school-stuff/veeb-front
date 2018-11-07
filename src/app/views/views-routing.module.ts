import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from '../shared/injectables/auth/auth.guard';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { AddTrainingComponent } from '../components/trainings/add-training.component';
import { TrainingListComponent } from '../components/trainings/training-list.component';
import { TrainingBaseComponent } from '../components/trainings/training-base.component';
import { PlanBaseComponent } from '../components/plans/plan-base.component';
import { PlanListComponent } from '../components/plans/plan-list.component';

const viewsRoutes: Routes = [
    {
        path: '',
        canActivate: [AuthGuard],
        component: HomeComponent,
        children: [
            {
                path: '',
                redirectTo: 'training',
                pathMatch: 'full',
            },
            {
                path: 'training',
                component: TrainingBaseComponent,
                canActivate: [AuthGuard],
                children: [
                    {
                        path: '',
                        redirectTo: 'list',
                        pathMatch: 'full',
                    },
                    {
                        path: 'list',
                        component: TrainingListComponent,
                        canActivate: [AuthGuard],
                    },
                    {
                        path: 'new',
                        component: AddTrainingComponent,
                        canActivate: [AuthGuard],
                    },
                ],
            },
            {
                path: 'plan',
                component: PlanBaseComponent,
                canActivate: [AuthGuard],
                children: [
                    {
                        path: '',
                        redirectTo: 'list',
                        pathMatch: 'full',
                    },
                    {
                        path: 'list',
                        component: PlanListComponent,
                        canActivate: [AuthGuard],
                    },
                ],
            },
        ],
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'register',
        component: RegisterComponent,
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
export class ViewsRoutingModule {
}
