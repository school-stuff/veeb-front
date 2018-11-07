import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AlertService } from '../../services/alert.service';
import { AuthenticationService } from '../../services/authentication.service';
import { TrainingService } from '../../services/training.service';
import { Training } from '../../models/training.model';

@Component({
    selector: 'app-trainings',
    templateUrl: './training-list.component.html',
    styleUrls: ['./training-list.component.css'],
})
export class TrainingListComponent implements OnInit {

    trainings: Training[];
    openedTrainingId: number;

    constructor(private authService: AuthenticationService,
                private formBuilder: FormBuilder,
                private route: ActivatedRoute,
                private router: Router,
                private alertService: AlertService,
                private trainingService: TrainingService) {

    }

    ngOnInit() {
        this.loadTrainings();
    }

    addTraining() {
        this.router.navigate(['training', 'new']);
    }

    openTraining(id) {
        this.openedTrainingId = id;
    }

    loadTrainings() {
        this.trainingService.getAll().subscribe((res: Training[]) => {
            this.trainings = res;
        });
    }

}
