import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMockDataComponent } from './list-mock-data.component';

describe('ListMockDataComponent', () => {
  let component: ListMockDataComponent;
  let fixture: ComponentFixture<ListMockDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMockDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMockDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
