import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixProcessComponent } from './six-process.component';

describe('SixProcessComponent', () => {
  let component: SixProcessComponent;
  let fixture: ComponentFixture<SixProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SixProcessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SixProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
