import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElegirseguroComponent } from './elegirseguro.component';

describe('ElegirseguroComponent', () => {
  let component: ElegirseguroComponent;
  let fixture: ComponentFixture<ElegirseguroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElegirseguroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElegirseguroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
