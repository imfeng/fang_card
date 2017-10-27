import { IonicPageModule } from 'ionic-angular';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MemorygameComponent } from './memorygame/memorygame';
import { ChessboardComponent } from './chessboard/chessboard';
import { DashboardComponent } from './dashboard/dashboard';
import { StatusComponent } from './status/status';
import { CardComponent } from './card/card';
import { InfoComponent } from './info/info';
import { LogoComponent } from './logo/logo';
import { TestComponent } from './test/test';
@NgModule({
	declarations: [MemorygameComponent,
    ChessboardComponent,
    DashboardComponent,
    StatusComponent,
    CardComponent,
    InfoComponent,
    LogoComponent,
    TestComponent],
	imports: [
        CommonModule,
        IonicPageModule.forChild(StatusComponent)
    ],
	exports: [MemorygameComponent,
    ChessboardComponent,
    DashboardComponent,
    StatusComponent,
    CardComponent,
    InfoComponent,
    LogoComponent,
    TestComponent]
})
export class ComponentsModule {}
