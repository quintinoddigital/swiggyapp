import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabmenuPage } from './tabmenu.page';

describe('TabmenuPage', () => {
  let component: TabmenuPage;
  let fixture: ComponentFixture<TabmenuPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TabmenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
