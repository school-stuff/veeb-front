import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { AlertService } from './services/alert.service';
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';
import { AuthGuard } from './shared/injectables/auth/auth.guard';
import { ErrorInterceptor } from './shared/injectables/auth/error.interceptor';
import { JwtInterceptor } from './shared/injectables/auth/jwt.interceptor';
import { SharedModule } from './shared/shared.module';
import { ViewsModule } from './views/views.module';
import { ViewsRoutingModule } from './views/views-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ViewsRoutingModule,
        AppRoutingModule,
        ComponentsModule,
        ViewsModule,
        SharedModule,
        ComponentsModule,
    ],
    declarations: [
        AppComponent,
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
        {provide: LOCALE_ID, useValue: 'en-US'},
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}
