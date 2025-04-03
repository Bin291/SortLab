import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarbarComponent } from './narbar.component';

describe('NarbarComponent', () => {
  let component: NarbarComponent;
  let fixture: ComponentFixture<NarbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NarbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NarbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
