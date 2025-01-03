import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SawComponent } from './saw.component';

describe('SawComponent', () => {
  let component: SawComponent;
  let fixture: ComponentFixture<SawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SawComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
