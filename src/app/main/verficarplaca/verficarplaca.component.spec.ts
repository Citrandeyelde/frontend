import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerficarplacaComponent } from './verficarplaca.component';

describe('VerficarplacaComponent', () => {
  let component: VerficarplacaComponent;
  let fixture: ComponentFixture<VerficarplacaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerficarplacaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerficarplacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
