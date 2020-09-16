import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PungerPage } from './punger.page';

describe('PungerPage', () => {
  let component: PungerPage;
  let fixture: ComponentFixture<PungerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PungerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PungerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
