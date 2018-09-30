import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from '../components/components.module';
import { HomeComponent } from './home/home.component';
import { ViewsRoutingModule } from './views-routing.module';

@NgModule({
    imports: [
        CommonModule,
        ComponentsModule,
        ViewsRoutingModule,
    ],
    declarations: [HomeComponent],
})
export class ViewsModule {}
