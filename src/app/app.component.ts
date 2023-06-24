import { preserveWhitespacesDefault } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  preserveWhitespaces: false
})
export class AppComponent {
  title = 'Sayyed Jenul';

}
