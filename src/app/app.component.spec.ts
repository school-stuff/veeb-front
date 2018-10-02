import { async, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                ComponentsModule,
            ],
            declarations: [
                AppComponent,
            ],
        }).compileComponents();
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
