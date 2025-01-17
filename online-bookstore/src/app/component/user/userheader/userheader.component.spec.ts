import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserheaderComponent } from './userheader.component';

describe('UserheaderComponent', () => {
  let component: UserheaderComponent;
  let fixture: ComponentFixture<UserheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserheaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
