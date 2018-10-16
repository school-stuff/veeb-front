import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingComponent } from './onboarding.component';

describe('OnboardingComponent', () => {
    let component: OnboardingComponent;
    let fixture: ComponentFixture<OnboardingComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [OnboardingComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OnboardingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should contain {firstName, lastName, birthDate, trainer} input fields', () => {
        const loginElement: HTMLElement = fixture.nativeElement;

        const emailField = loginElement.querySelector('[type]="email"');
        const passwordField = loginElement.querySelector('[type]="password"');
        const birthDateField = loginElement.querySelector('[type]="date"');
        const trainerField = loginElement.querySelector('[type]="checkbox"');

        expect(emailField).toBeTruthy();
        expect(passwordField).toBeTruthy();
        expect(birthDateField).toBeTruthy();
        expect(trainerField).toBeTruthy();
    });
});
