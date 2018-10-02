import { CommonModule } from '@angular/common';
import { async, TestBed } from '@angular/core/testing';
import { MatButtonModule, MatCardModule, MatInputModule } from '@angular/material';
import { ComponentsModule } from './components.module';
import { LoginComponent } from './login/login.component';

describe('ComponentsModule', () => {
    let componentsModule: ComponentsModule;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                CommonModule,
                MatButtonModule,
                MatCardModule,
                MatInputModule,
            ],
            declarations: [LoginComponent],
        }).compileComponents();

        componentsModule = new ComponentsModule();
    }));

    it('should create an instance', () => {
        expect(componentsModule).toBeTruthy();
    });
});
