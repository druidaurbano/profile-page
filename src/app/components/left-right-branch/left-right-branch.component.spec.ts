import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftRightBranchComponent } from './left-right-branch.component';

describe('LeftRightBranchComponent', () => {
  let component: LeftRightBranchComponent;
  let fixture: ComponentFixture<LeftRightBranchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeftRightBranchComponent]
    });
    fixture = TestBed.createComponent(LeftRightBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
