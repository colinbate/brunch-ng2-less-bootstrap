import {Component} from 'angular2/core';
import {Alert} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'about',
  directives: [Alert],
  template: require('./about.tmpl')(),
  styles: [require('./about.style')]
})
export default class About {
  public name: string;
  private showAlert: boolean;
  constructor() {
    this.name = 'Colin';
  }

  clearAlert() {
    this.showAlert = false;
  }

  alert() {
    this.showAlert = true;
  }

  ngOnInit() { console.log('About::ngOnInit'); }
  ngOnDestroy() { console.log('About::ngOnDestroy'); }
}
