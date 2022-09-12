import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiLolComponent } from './api-lol.component';

describe('ApiLolComponent', () => {
  let component: ApiLolComponent;
  let fixture: ComponentFixture<ApiLolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiLolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiLolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
