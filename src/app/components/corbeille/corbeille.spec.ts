import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Corbeille } from './corbeille';

describe('Corbeille', () => {
  let component: Corbeille;
  let fixture: ComponentFixture<Corbeille>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Corbeille]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Corbeille);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
