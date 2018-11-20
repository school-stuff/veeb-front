import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AlertService } from '../../services/alert.service';
import { AuthenticationService } from '../../services/authentication.service';
import { TrainingService } from '../../services/training.service';
import { Training } from '../../models/training.model';
import { ExerciseService } from '../../services/exercise.service';
import { Exercise } from '../../models/exercise.model';

@Component({
    selector: 'app-plan-list',
    templateUrl: './exercise-list.component.html',
    styleUrls: ['./exercise-list.component.css'],
})
export class ExerciseListComponent implements OnInit {

    exercises: any[];
    openedExerciseId: number;

    constructor(private authService: AuthenticationService,
                private formBuilder: FormBuilder,
                private route: ActivatedRoute,
                private router: Router,
                private alertService: AlertService,
                private trainingService: TrainingService,
                private exercisesService: ExerciseService) {

    }

    ngOnInit() {
        this.loadExercises();
    }

    addExercise() {
        this.router.navigate(['exercise', 'new']);
    }

    openExercise(id) {
    }

    loadExercises() {
        this.exercisesService.getAll().subscribe((res: Exercise[]) => {
            console.log(res);
            this.exercises = res;
        }, (error) => {
            console.log(error);
        });
    }

}
