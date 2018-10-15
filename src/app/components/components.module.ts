import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatInputModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatCheckboxModule,
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatCheckboxModule,
    ],
    declarations: [],
})
export class ComponentsModule {
}
