import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AlertService } from '../../services/alert.service';
import { AuthenticationService } from '../../services/authentication.service';
import { TrainingService } from '../../services/training.service';
import { Training } from '../../models/training.model';

@Component({
    selector: 'app-add-training',
    templateUrl: './add-training.component.html',
    styleUrls: ['./add-training.component.css'],
})
export class AddTrainingComponent implements OnInit {

    trainingForm: FormGroup;
    submitted = false;

    constructor(private authService: AuthenticationService,
                private formBuilder: FormBuilder,
                private route: ActivatedRoute,
                private router: Router,
                private alertService: AlertService,
                private trainingService: TrainingService) {
    }

    ngOnInit() {
        this.trainingForm = this.formBuilder.group({
            name: ['', Validators.required],
            description: [''],
            weeks: [''],
            timesPerWeek: ['', Validators.min(0)],
            exercises: ['', Validators.min(0)],
        });
    }

    onCreate() {
        this.submitted = true;
        if (this.trainingForm.invalid) {
            return;
        }

        const training = new Training(this.trainingForm.controls.name.value);
        training.description = this.trainingForm.controls.description.value;
        training.weeks = this.trainingForm.controls.weeks.value;
        training.timesPerWeek = this.trainingForm.controls.timesPerWeek.value;
        training.exercises = [this.trainingForm.controls.exercises.value];

        console.log(training);

        this.trainingService.create(training).subscribe((res) => {
            console.log(res);
        }, (err) => {
            console.log(err);
        }, () => {
            this.submitted = false;
        });
    }

    onCancel() {
        this.router.navigate(['trainings']);
    }
}
