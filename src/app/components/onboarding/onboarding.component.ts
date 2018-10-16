import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
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

    onRegister() {
        this.submitted = true;

        if (this.onboardingForm.invalid) {
            return;
        }

        const fc = this.onboardingForm.controls;
        const firstName = fc.firstName.value;
        const lastName = fc.lastName.value;
        const birthDate = fc.birthDate.value;
        const trainer = fc.trainer.value;

        this.onboardingForm.markAsPending();
        this.userService.update({firstName, lastName, birthDate, trainer})
            .pipe(first())
            .subscribe(
                () => {
                    this.alertService.success('common.alerts.success.login', true);
                    this.onboardingForm.updateValueAndValidity();
                    this.router.navigate(['']);
                },
                (error) => {
                    this.alertService.error(error);
                    this.onboardingForm.patchValue({name: '', password: ''});
                    this.onboardingForm.updateValueAndValidity();
                });
    }
}
