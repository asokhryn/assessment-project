import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingContactFormComponent } from './setting-contact-form.component';

describe('SettingContactFormComponent', () => {
  let component: SettingContactFormComponent;
  let fixture: ComponentFixture<SettingContactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingContactFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
