import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertComponent } from './components/alerts/alert.component';

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
