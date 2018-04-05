import {Component} from '@angular/core';
import {OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  appState: string;

  ngOnInit(): void {
    this.appState = 'intro';
  }

  receiveMessage($event) {
    if ($event === 'intro-ended') {
      this.appState = 'contacts';
    }

  }

}

