import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipiPComponent } from './tipi-p.component';

describe('TipiPComponent', () => {
  let component: TipiPComponent;
  let fixture: ComponentFixture<TipiPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipiPComponent]
    });
    fixture = TestBed.createComponent(TipiPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
