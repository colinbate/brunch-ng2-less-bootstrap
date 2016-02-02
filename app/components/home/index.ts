import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import MyModal from './../my-modal';
import Modals from './../my-modal/modals';

@Component({
  selector: 'home',
  directives: [
    ...FORM_DIRECTIVES, MyModal
  ],
  pipes: [],
  styles: [],
  template: `
  <div>
    <p>Your Content Here</p>
    <div class="form-group">
      <label for="homeTitle">Title</label>
      <input id="homeTitle" type="text" [value]="title.value" (input)="setValue($event)" class="form-control" autofocus>
    </div>
    <pre>this.title = {{ title | json }}</pre>
    <button class="btn btn-primary" (click)="openModal(mm)">Modal</button>
    <my-modal #mm></my-modal>
  </div>`
})
export default class Home {
  public title: any;
  private showModal: boolean;
  constructor(private modals: Modals) {
    this.title = { value: 'Angular 2' };
  }

  setValue(ev) {
    this.title.value = ev.target.value;
  }
  
  openModal(m) {
    console.log(m);
    m.open().then(v => console.log('Closed with:', v)).catch(err => console.log('Dismissed', err));
    console.log(m);
  }

  ngOnInit() {
    console.log('hello Home component');
  }

}
