import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { OnboardingComponent } from '../components/onboarding/onboarding.component';
import { RegisterComponent } from '../components/register/register.component';
import { HomeComponent } from './home/home.component';

const viewsRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent,
            },
            {
                path: 'register',
                component: RegisterComponent,
            },
            {
                path: 'onboarding',
                component: OnboardingComponent,
            },
        ],
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
