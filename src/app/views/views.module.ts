import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from '../components/components.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { ViewsRoutingModule } from './views-routing.module';
import { MytrainingsComponent } from './mytrainings/mytrainings.component';

@NgModule({
    imports: [
        CommonModule,
        ComponentsModule,
        ViewsRoutingModule,
        SharedModule,
    ],
    declarations: [
        HomeComponent,
        MytrainingsComponent,
    ],
})
export class ViewsModule {
}
