import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposeMessgeComponent } from './compose-messge.component';

describe('ComposeMessgeComponent', () => {
  let component: ComposeMessgeComponent;
  let fixture: ComponentFixture<ComposeMessgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComposeMessgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposeMessgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
