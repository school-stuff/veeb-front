import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from '../components/components.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { ViewsRoutingModule } from './views-routing.module';

@NgModule({
    imports: [
        CommonModule,
        ComponentsModule,
        ViewsRoutingModule,
        SharedModule,
    ],
    declarations: [HomeComponent],
})
export class ViewsModule {}
