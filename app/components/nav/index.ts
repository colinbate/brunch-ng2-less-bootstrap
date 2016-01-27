import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {RouterActive} from './../../directives/router-active';

@Component({
  selector: 'app-nav',
  directives: [
    ...ROUTER_DIRECTIVES,
    RouterActive
  ],
  styles: [ require('./nav.style') ],
  template: require('./nav.tmpl')()
})
export default class Nav {
  constructor() {

  }
}
