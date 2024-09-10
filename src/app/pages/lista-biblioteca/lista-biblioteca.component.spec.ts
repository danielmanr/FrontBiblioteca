import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBibliotecaComponent } from './lista-biblioteca.component';

describe('ListaBibliotecaComponent', () => {
  let component: ListaBibliotecaComponent;
  let fixture: ComponentFixture<ListaBibliotecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaBibliotecaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaBibliotecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
