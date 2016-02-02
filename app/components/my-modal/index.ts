import {Component} from 'angular2/core';
import Modal from './modal';
import Modals from './modals';

@Component({
  selector: 'my-modal',
  directives: [Modal],
  template: `
  <modal [owner]="me">
    This is my personalized modal content. {{isOpen}}
  </modal>`
})
export default class MyModal extends Modal {
  constructor(modals: Modals) {
    this.id = 'fetchOrGenerate';
    super(modals);
    this.title = 'My Modal!';
  }
  
  close(value: any) {
    super.close(value);
    console.log('Do something neat')
  }
}
