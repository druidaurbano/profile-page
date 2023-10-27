import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpBranchComponent } from './up-branch.component';

describe('UpBranchComponent', () => {
  let component: UpBranchComponent;
  let fixture: ComponentFixture<UpBranchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpBranchComponent]
    });
    fixture = TestBed.createComponent(UpBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
