import {Component} from 'angular2/core';
import Modal from './modal';
import Modals from './modals';

@Component({
  selector: 'my-modal',
  directives: [Modal],
  template: `
  <modal>
    This is my personalized modal content.
  </modal>`
})
export default class MyModal extends Modal {
  constructor(modals: Modals) {
    this.id = 'fetchOrGenerate';
    super(modals);
    this.title = 'My Modal!';
  }
  
}