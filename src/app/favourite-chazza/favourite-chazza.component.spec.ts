import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteChazzaComponent } from './favourite-chazza.component';

describe('FavouriteChazzaComponent', () => {
  let component: FavouriteChazzaComponent;
  let fixture: ComponentFixture<FavouriteChazzaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavouriteChazzaComponent]
    });
    fixture = TestBed.createComponent(FavouriteChazzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
