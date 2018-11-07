import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertComponent } from './components/alerts/alert.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        AlertComponent,
        NavbarComponent,
    ],
    declarations: [
        AlertComponent,
        NavbarComponent,
    ],
})
export class SharedModule {
}
