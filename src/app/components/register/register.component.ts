import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AlertService } from '../../services/alert.service';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;

    static matches(form: AbstractControl) {
        return form.get('password').value === form.get('passwordConfirm').value ? null : {equals: true};
    }

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
        }, {validator: RegisterComponent.matches});
    }

    onRegister() {
        this.submitted = true;

        if (this.registerForm.invalid) {
            return;
        }

        this.registerForm.markAsPending();
        this.userService.register(this.registerForm.value)
            .pipe(first())
            .subscribe(
                () => {
                    this.alertService.success('common.alerts.success.register', true);
                    this.router.navigate(['']);
                    this.registerForm.updateValueAndValidity();
                    this.router.navigate(['']);
                },
                (error) => {
                    this.alertService.error(error);
                    this.registerForm.patchValue({name: '', password: ''});
                    this.registerForm.updateValueAndValidity();
                });
    }
}
