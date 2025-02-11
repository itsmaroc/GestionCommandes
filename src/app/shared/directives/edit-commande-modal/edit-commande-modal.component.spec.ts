import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCommandeModalComponent } from './edit-commande-modal.component';

describe('EditCommandeModalComponent', () => {
  let component: EditCommandeModalComponent;
  let fixture: ComponentFixture<EditCommandeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditCommandeModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditCommandeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
