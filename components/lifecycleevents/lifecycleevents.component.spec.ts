import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleeventsComponent } from './lifecycleevents.component';

describe('LifecycleeventsComponent', () => {
  let component: LifecycleeventsComponent;
  let fixture: ComponentFixture<LifecycleeventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifecycleeventsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifecycleeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
