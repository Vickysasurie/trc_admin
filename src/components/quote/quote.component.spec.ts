import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotedataComponent } from './quote.component';

describe('QuotedataComponent', () => {
  let component: QuotedataComponent;
  let fixture: ComponentFixture<QuotedataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotedataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
