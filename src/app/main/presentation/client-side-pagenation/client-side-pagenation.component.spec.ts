import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSidePagenationComponent } from './client-side-pagenation.component';

describe('ClientSidePagenationComponent', () => {
  let component: ClientSidePagenationComponent;
  let fixture: ComponentFixture<ClientSidePagenationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientSidePagenationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientSidePagenationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
