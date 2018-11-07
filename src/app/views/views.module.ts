import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from '../components/components.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { ViewsRoutingModule } from './views-routing.module';
import { MatIcon, MatIconModule, MatSidenavModule, MatToolbar, MatToolbarModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MatIconModule,
        MatToolbarModule,
        MatSidenavModule,
        ComponentsModule,
        ViewsRoutingModule,
        SharedModule,
    ],
    declarations: [
        HomeComponent,
    ],
})
export class ViewsModule {
}
