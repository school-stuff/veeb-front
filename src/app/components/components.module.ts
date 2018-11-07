import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatExpansionModule, MatInputModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { RegisterComponent } from './register/register.component';
import { TrainingListComponent } from './trainings/training-list.component';
import { AddTrainingComponent } from './trainings/add-training.component';
import { TrainingService } from '../services/training.service';
import { TrainingDetailComponent } from './trainings/training-detail.component';
import { TrainingBaseComponent } from './trainings/training-base.component';
import { RouterModule } from '@angular/router';
import { PlanListComponent } from './plans/plan-list.component';
import { PlanBaseComponent } from './plans/plan-base.component';
import { ExerciseBaseComponent } from './exercises/exercise-base.component';
import { ExerciseListComponent } from './exercises/exercise-list.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatCheckboxModule,
        MatExpansionModule,
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
        TrainingListComponent,
        AddTrainingComponent,
        TrainingDetailComponent,
        TrainingBaseComponent,
        PlanListComponent,
        PlanBaseComponent,
        ExerciseListComponent,
        ExerciseBaseComponent,
    ],
    declarations: [
        LoginComponent,
        RegisterComponent,
        OnboardingComponent,
        TrainingListComponent,
        AddTrainingComponent,
        TrainingDetailComponent,
        TrainingBaseComponent,
        PlanListComponent,
        PlanBaseComponent,
        ExerciseListComponent,
        ExerciseBaseComponent,
    ],
    providers: [
        TrainingService,
    ],
})
export class ComponentsModule {
}
