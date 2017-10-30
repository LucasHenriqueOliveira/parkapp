import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LavaJatoComponent } from './lava-jato.component';

describe('LavaJatoComponent', () => {
  let component: LavaJatoComponent;
  let fixture: ComponentFixture<LavaJatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LavaJatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LavaJatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
