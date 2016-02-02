import {Component} from 'angular2/core';
import Modals from './modals';

@Component({
  selector: 'modal',
  directives: [],
  pipes: [],
  styles: [],
  template: require('./modal.tmpl')()
})
export default class Modal {
  public title: string;
  public id: string;
  public isOpen: boolean;
  
  private resolver: any;
  private rejecter: any;
  
  constructor(modals: Modals) {
    this.title = 'Modal!';
    this.id = 'fetchOrGenerate';
    modals.register(this);
  }
  
  open(): Promise<any> {
    // TODO: wait for animation
    this.isOpen = true;
    return new Promise((resolve, rej) => {
      this.resolver = resolve;
      this.rejecter = rej;
    });
  }
  
  close(value: any) {
    this.isOpen = false;
    this.resolver(value);
  }
  
  dismiss() {
    this.isOpen = false;
    // TODO: give a reason why, might be benign
    this.rejecter();
  }
}