/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FaComponent } from './fa.component';

describe('FaComponent', () => {
  let component: FaComponent;
  let fixture: ComponentFixture<FaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
