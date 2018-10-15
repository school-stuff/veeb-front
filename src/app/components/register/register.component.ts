import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../../services/alert.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) {
    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(4)]],
            passwordConfirm: ['', [Validators.required, Validators.minLength(4)]],
        }, {validator: this.matches});
    }

    matches(form: AbstractControl) {
        return form.get('password').value === form.get('passwordConfirm').value ? null : {equals: true};
    }

    // convenience getter for easy access to form fields
    get f() {
        return this.registerForm.controls;
    }

    onRegister() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.loading = true;
        this.userService.register(this.registerForm.value)
            .pipe(first())
            .subscribe(
                (res) => {
                    this.alertService.success('common.alerts.success.register', true);
                    this.router.navigate(['/login']);
                },
                (error) => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
