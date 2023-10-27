import { Component } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent {
  upBranchList: any = [1,2,3,4,5,6,7,8];
  leftBranchList: any = [1,2,3,4,5,6,7];
  rightBranchList: any = [1,2,3,4,5,6,7];

  constructor() {

  }

  ngOnInit() {
    this.getLengthBranch('#full-branch path');
    this.getLengthBranch('#leaf path');
    this.drawBranch();

  }

  getLengthBranch(element: string) {
    let fb: any = document.querySelector(element);
    let l = fb.getTotalLength();
    console.log('show me the length', l);
  }

  drawBranch() {
    console.log('drawing branches');
    //let path = document.querySelector('#full-branch path');
    let fb = document.getElementById('full-branch');
    if(fb != null) {
      console.log('show me the fullBranch', fb);
    }

    /* let teste: HTMLElement | null | undefined;
    teste = document.getElementById('full-branch');
    console.log(`inside`, teste?.style.strokeDasharray);
    teste?.style.strokeDasharray = '5461'; */
  }
}
