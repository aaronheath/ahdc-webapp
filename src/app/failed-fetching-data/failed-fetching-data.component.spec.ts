/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FailedFetchingDataComponent } from './failed-fetching-data.component';

describe('FailedFetchingDataComponent', () => {
  let component: FailedFetchingDataComponent;
  let fixture: ComponentFixture<FailedFetchingDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailedFetchingDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailedFetchingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
