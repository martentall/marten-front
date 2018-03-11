import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent {

  downArrowImgPath: string;
  introState: string;

  @Output() appStateEvent = new EventEmitter<string>();

  constructor() {
    this.downArrowImgPath = '/assets/img/down-arrow.svg';
  }

  endIntro() {
    this.introState = 'ending';
    setTimeout(() => {
      this.appStateEvent.emit('intro-ended')
    }, 300)

  }

}
