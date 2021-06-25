import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestADemoComponent } from './request-a-demo.component';

describe('RequestADemoComponent', () => {
  let component: RequestADemoComponent;
  let fixture: ComponentFixture<RequestADemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestADemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestADemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
