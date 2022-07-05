import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCommonComponent } from './table-common.component';

describe('TableCommonComponent', () => {
  let component: TableCommonComponent;
  let fixture: ComponentFixture<TableCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
