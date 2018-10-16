import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnboardingComponent } from '../components/onboarding/onboarding.component';
import { HomeComponent } from './home/home.component';

const viewsRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'onboarding',
        component: OnboardingComponent,
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
