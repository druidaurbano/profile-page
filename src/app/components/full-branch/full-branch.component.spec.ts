import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullBranchComponent } from './full-branch.component';

describe('FullBranchComponent', () => {
  let component: FullBranchComponent;
  let fixture: ComponentFixture<FullBranchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullBranchComponent]
    });
    fixture = TestBed.createComponent(FullBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
