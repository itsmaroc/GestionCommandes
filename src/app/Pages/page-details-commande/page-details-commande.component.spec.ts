import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDetailsCommandeComponent } from './page-details-commande.component';

describe('PageDetailsCommandeComponent', () => {
  let component: PageDetailsCommandeComponent;
  let fixture: ComponentFixture<PageDetailsCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageDetailsCommandeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageDetailsCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
