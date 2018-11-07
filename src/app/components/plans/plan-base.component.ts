import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { AlertService } from '../../services/alert.service';
import { TrainingService } from '../../services/training.service';

@Component({
    selector: 'app-plan-base',
    templateUrl: './plan-base.component.html',
    styleUrls: ['./plan-base.component.css'],
})
export class PlanBaseComponent implements OnInit {

    constructor(private authService: AuthenticationService,
                private formBuilder: FormBuilder,
                private route: ActivatedRoute,
                private router: Router,
                private alertService: AlertService,
                private trainingService: TrainingService) {

    }

    ngOnInit() {

    }
}
