import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  links = [{
    name: 'Home',
    path: 'home'
  },
  {
    name: 'Explore',
    path: 'explore'
  }];
  activeLink = this.links[0].path;
  background = '';
  toggleBackground() {
    this.background = this.background ? '' : 'primary';
  }

}
