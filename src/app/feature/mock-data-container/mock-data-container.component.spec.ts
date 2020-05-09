import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MockDataContainerComponent } from './mock-data-container.component';

describe('MockDataContainerComponent', () => {
  let component: MockDataContainerComponent;
  let fixture: ComponentFixture<MockDataContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MockDataContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockDataContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
