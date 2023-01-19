import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupSmsComponent } from './group-sms.component';

describe('GroupSmsComponent', () => {
  let component: GroupSmsComponent;
  let fixture: ComponentFixture<GroupSmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupSmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupSmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
