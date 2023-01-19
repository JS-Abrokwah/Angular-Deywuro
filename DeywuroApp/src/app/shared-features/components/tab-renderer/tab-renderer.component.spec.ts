import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabRendererComponent } from './tab-renderer.component';

describe('TabRendererComponent', () => {
  let component: TabRendererComponent;
  let fixture: ComponentFixture<TabRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabRendererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
