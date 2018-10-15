import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
    let component: RegisterComponent;
    let fixture: ComponentFixture<RegisterComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RegisterComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RegisterComponent);
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
