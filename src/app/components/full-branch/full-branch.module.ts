import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullBranchComponent } from './full-branch.component';



@NgModule({
  declarations: [FullBranchComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FullBranchComponent
  ]
})
export class FullBranchModule { }
