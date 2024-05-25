import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThoughtDetailComponent } from './thought-detail.component';

describe('ThoughtDetailComponent', () => {
  let component: ThoughtDetailComponent;
  let fixture: ComponentFixture<ThoughtDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThoughtDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThoughtDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
