import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabacPage } from './tabac.page';

describe('TabacPage', () => {
  let component: TabacPage;
  let fixture: ComponentFixture<TabacPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabacPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabacPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
