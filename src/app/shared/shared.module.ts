import { NgModule } from '@angular/core';
import { AlertComponent } from './components/alerts/alert.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        AlertComponent,
    ],
    declarations: [
        AlertComponent,
    ],
})
export class SharedModule {
}
