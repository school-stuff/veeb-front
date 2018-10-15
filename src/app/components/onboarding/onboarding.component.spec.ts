import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should contain email and password input fields', () => {
        const loginElement: HTMLElement = fixture.nativeElement;

        const emailField = loginElement.querySelector('[type]="email"');
        const passwordField = loginElement.querySelector('[type]="password"');

        expect(emailField).toBeTruthy();
        expect(passwordField).toBeTruthy();
    });
});
