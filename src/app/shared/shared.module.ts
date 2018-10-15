import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatInputModule } from '@angular/material';
import { AlertComponent } from './alerts/alert.component';
import { AuthGuard } from './auth/auth.guard';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        AlertComponent,
        AuthGuard,
    ],
    declarations: [
        AlertComponent,
        AuthGuard,
    ],
})
export class SharedModule {
}
