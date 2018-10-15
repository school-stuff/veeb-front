import { RegisterComponent } from '../components/register/register.component';
import { LoginComponent } from '../components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OnboardingComponent } from '../components/onboarding/onboarding.component';

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
