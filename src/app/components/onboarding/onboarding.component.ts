import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { User } from '../../models/user.model';
import { AlertService } from '../../services/alert.service';
import { AuthenticationService } from '../../services/authentication.service';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-onboarding',
    templateUrl: './onboarding.component.html',
    styleUrls: ['./onboarding.component.css'],
})
export class OnboardingComponent implements OnInit {
    onboardingForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(private authenticationService: AuthenticationService,
                private formBuilder: FormBuilder,
                private route: ActivatedRoute,
                private router: Router,
                private alertService: AlertService,
                private userService: UserService) {
    }

    ngOnInit() {
        this.onboardingForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            birthDate: ['', Validators.required],
            trainer: [''],
        });
    }

    // convenience getter for easy access to form fields
    get f() {
        return this.onboardingForm.controls;
    }

    onRegister() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.onboardingForm.invalid) {
            return;
        }

        this.loading = true;
        this.userService.update(new User())
            .pipe(first())
            .subscribe(
                (res) => {
                    this.alertService.success('common.alerts.success.login', true);
                    this.router.navigate(['']);
                },
                (error) => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
