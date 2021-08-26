import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerFundComponent } from './manager-fund.component';

describe('ManagerFundComponent', () => {
  let component: ManagerFundComponent;
  let fixture: ComponentFixture<ManagerFundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerFundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
