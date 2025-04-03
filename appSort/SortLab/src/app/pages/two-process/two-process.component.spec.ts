import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoProcessComponent } from './two-process.component';

describe('TwoProcessComponent', () => {
  let component: TwoProcessComponent;
  let fixture: ComponentFixture<TwoProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoProcessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
