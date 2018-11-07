import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AlertService } from '../../services/alert.service';
import { AuthenticationService } from '../../services/authentication.service';
import { TrainingService } from '../../services/training.service';
import { Training } from '../../models/training.model';
import { Exercise } from '../../models/exercise.model';

@Component({
    selector: 'app-training-detail',
    templateUrl: './training-detail.component.html',
    styleUrls: ['./training-detail.component.css'],
})
export class TrainingDetailComponent implements OnInit {

    @Input() trainingId;
    @Input() training;
    localExercises: any[] = [];

    constructor(private authService: AuthenticationService,
                private formBuilder: FormBuilder,
                private route: ActivatedRoute,
                private router: Router,
                private alertService: AlertService,
                private trainingService: TrainingService) {

    }

    ngOnInit() {
        this.loadExercises(this.trainingId);
        this.localExercises.push(new Exercise('Exercise1', 'Description1', 'Amount1'));
        this.localExercises.push(new Exercise('Exercise2', 'Description2', 'Amount2'));
        this.localExercises.push(new Exercise('Exercise3', 'Description3', 'Amount3'));
    }

    loadExercises(id) {
        /**
         * TODO: load exercises for the given training.
         */
    }

}
