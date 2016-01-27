import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';

@Component({
  selector: 'home',
  directives: [
    ...FORM_DIRECTIVES
  ],
  pipes: [],
  styles: [],
  template: `
  <div>
    <p>Your Content Here</p>
    <div class="form-group">
      <label for="homeTitle">Title</label>
      <input id="homeTitle" type="text" [value]="title.value" (input)="title.value = $event.target.value" class="form-control" autofocus>
    </div>
    <pre>this.title = {{ title | json }}</pre>
  </div>`
})
export default class Home {
  public title: any;
  constructor() {
    this.title = { value: 'Angular 2' };
  }

  ngOnInit() {
    console.log('hello Home component');
  }

}