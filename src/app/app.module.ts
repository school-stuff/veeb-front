import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { ViewsModule } from './views/views.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AlertComponent } from './shared/alerts/alert.component';
import { UserService } from './services/user.service';
import { AuthenticationService } from './services/authentication.service';
import { AlertService } from './services/alert.service';
import { AuthGuard } from './shared/auth/auth.guard';
import { ErrorInterceptor } from './shared/auth/error.interceptor';
import { JwtInterceptor } from './shared/auth/jwt.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OnboardingComponent } from './components/onboarding/onboarding.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ComponentsModule,
        ViewsModule,
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        LoginComponent,
        RegisterComponent,
        OnboardingComponent,
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
