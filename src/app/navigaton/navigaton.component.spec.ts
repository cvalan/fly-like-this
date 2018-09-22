import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatonComponent } from './navigaton.component';

describe('NavigatonComponent', () => {
  let component: NavigatonComponent;
  let fixture: ComponentFixture<NavigatonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigatonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigatonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
