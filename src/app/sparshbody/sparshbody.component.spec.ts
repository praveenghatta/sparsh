import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SparshbodyComponent } from './sparshbody.component';

describe('SparshbodyComponent', () => {
  let component: SparshbodyComponent;
  let fixture: ComponentFixture<SparshbodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SparshbodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparshbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
