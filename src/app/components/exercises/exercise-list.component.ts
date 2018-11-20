import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AlertService } from '../../services/alert.service';
import { AuthenticationService } from '../../services/authentication.service';
import { TrainingService } from '../../services/training.service';
import { Training } from '../../models/training.model';

@Component({
    selector: 'app-plan-list',
    templateUrl: './exercise-list.component.html',
    styleUrls: ['./exercise-list.component.css'],
})
export class ExerciseListComponent implements OnInit {

    plans: any[];
    openedPlanId: number;

    constructor(private authService: AuthenticationService,
                private formBuilder: FormBuilder,
                private route: ActivatedRoute,
                private router: Router,
                private alertService: AlertService,
                private trainingService: TrainingService) {

    }

    ngOnInit() {
        this.loadPlans();
    }

    addPlan() {
        this.router.navigate(['plan', 'new']);
    }

    openPlan(id) {
    }

    loadPlans() {

    }

}
