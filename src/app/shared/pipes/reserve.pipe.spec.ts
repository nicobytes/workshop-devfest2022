import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

export function getText<T>(fixture: ComponentFixture<T>, testId: string) {
  const debugElement = queryById(fixture, testId);
  const element: HTMLElement = debugElement.nativeElement;
  return element.textContent;
}

export function query<T>(fixture: ComponentFixture<T>, selector: string) {
  const debugElement = fixture.debugElement.query(By.css(selector));
  if (!debugElement) {
    throw new Error(`query: Element with ${selector} not found`);
  }
  return debugElement;
}

export function queryById<T>(fixture: ComponentFixture<T>, testId: string) {
  const selector = `[data-testid="${testId}"]`;
  return query(fixture, selector);
}

import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {
  it('create an instance', () => {
    const pipe = new ReversePipe();
    expect(pipe).toBeTruthy();
  });

  it('should tranform "roma" to "amor"', () => {
    const pipe = new ReversePipe();
    const rta = pipe.transform("roma");
    expect(rta).toEqual("amor");
  })

  it('should tranform "123" to "321"', () => {
    const pipe = new ReversePipe();
    const rta = pipe.transform("123");
    expect(rta).toEqual("321");
  })
});


@Component({
  template: `
    <h5 data-testid="title">{{ 'amor' | reverse }}</h5>
    <input data-testid="input" [(ngModel)]="text">
    <p data-testid="text">{{ text | reverse }}</p>
  `
})
class HostComponent {
  text = '';
}

describe('ReversePipe from HostComponent', () => {

  let component: HostComponent;
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostComponent, ReversePipe ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should the h5 be "roma"', () => {
    // const h5De = fixture.debugElement.query(By.css('h5'));
    const titleText = getText(fixture, 'title');
    expect(titleText).toEqual('roma');
  });

  it('should apply reverse pipe when typing in the input', () => {
    const inputDe = queryById(fixture, 'input');
    const inputEl: HTMLInputElement = inputDe.nativeElement;
    // const pDe = fixture.debugElement.query(By.css('p'));
    const pDebug = queryById(fixture, 'text');

    expect(pDebug.nativeElement.textContent).toEqual('');

    inputEl.value = 'ANA 2'; // 2 ANA
    inputEl.dispatchEvent(new Event('input'));
    fixture.detectChanges();


    expect(pDebug.nativeElement.textContent).toEqual('2 ANA');
  });

});
