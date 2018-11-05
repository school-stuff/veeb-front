import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AlertService } from '../../services/alert.service';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    submitted = false;
    returnUrl;

    constructor(private authService: AuthenticationService,
                private formBuilder: FormBuilder,
                private route: ActivatedRoute,
                private router: Router,
                private alertService: AlertService) {
    }

    ngOnInit() {
        // Get the query params
        this.route.queryParams.subscribe((params) => this.returnUrl = params['return'] || '/mytrainings');
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    onLogin() {
        this.submitted = true;

        if (this.loginForm.invalid) {
            return;
        }
        this.loginForm.markAsPending();
        this.authService.login(this.loginForm.controls.email.value, this.loginForm.controls.password.value)
            .pipe(first())
            .subscribe(
                () => {
                    this.alertService.success('common.alerts.success.login', true);
                    this.loginForm.updateValueAndValidity();
                    this.router.navigateByUrl('');
                },
                (error) => {
                    this.alertService.error('wrong login inforamtion');
                    this.loginForm.patchValue({name: this.loginForm.controls.email.value, password: ''});
                    this.loginForm.updateValueAndValidity();
                });
    }

    register() {
        this.router.navigateByUrl('register');
    }
}
