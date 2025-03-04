import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalPagesComponent } from './personal-pages.component';

describe('PersonalPagesComponent', () => {
  let component: PersonalPagesComponent;
  let fixture: ComponentFixture<PersonalPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalPagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
