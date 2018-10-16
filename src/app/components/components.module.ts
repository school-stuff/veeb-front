import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatInputModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatCheckboxModule,
        ReactiveFormsModule,
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatCheckboxModule,
        LoginComponent,
        RegisterComponent,
        OnboardingComponent,
    ],
    declarations: [
        LoginComponent,
        RegisterComponent,
        OnboardingComponent,
    ],
})
export class ComponentsModule {
}
