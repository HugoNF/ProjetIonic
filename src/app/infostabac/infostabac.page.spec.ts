import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfostabacPage } from './infostabac.page';

describe('InfostabacPage', () => {
  let component: InfostabacPage;
  let fixture: ComponentFixture<InfostabacPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfostabacPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfostabacPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
