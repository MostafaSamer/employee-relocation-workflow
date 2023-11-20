import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelocateModalComponent } from './relocate-modal.component';

describe('RelocateModalComponent', () => {
  let component: RelocateModalComponent;
  let fixture: ComponentFixture<RelocateModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelocateModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RelocateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
