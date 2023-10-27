import { BackgroundComponent } from './background.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpBranchModule } from '../up-branch/up-branch.module';
import { LeftRightBranchModule } from '../left-right-branch/left-right-branch.module';



@NgModule({
  declarations: [BackgroundComponent],
  imports: [
    CommonModule,
    UpBranchModule,
    LeftRightBranchModule
  ],
  exports: [BackgroundComponent]
})
export class BackgroundModule { }
