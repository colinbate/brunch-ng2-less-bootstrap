import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';

import {RouterActive} from './directives/router-active';
import Home from './components/home';
import About from './components/about';
import Nav from './components/nav';


/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  providers: [ ...FORM_PROVIDERS ],
  directives: [ ...ROUTER_DIRECTIVES, RouterActive, Nav ],
  pipes: [],
  styles: [`
    footer {
      margin-top: 1em;
      border-top: 1px solid #ddd;
      padding-top: 0.5em;
    }
  `],
  template: `
    <header class="container">
      <h1>Hello {{ name }}</h1>
    </header>
    <app-nav></app-nav>
    <main class="container">
      <router-outlet></router-outlet>
    </main>
    <footer>
      <div class="container">
      Brunch for Angular 2 by <a [href]="url">Colin Bate</a>
      </div>
    </footer>
  `
})
@RouteConfig([
  { path: '/', component: Home, name: 'Home' },
  { path: '/about', component: About, name: 'About' },
  { path: '/**', redirectTo: ['Home'] }
])
export class App {
  name = 'Brunch for Angular 2';
  url = 'http://colin.is';
  constructor() {

  }
}
