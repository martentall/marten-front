import {Component, HostListener, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import Timer = NodeJS.Timer;

@Component({
  selector: 'cv-caret',
  templateUrl: './caret.component.html',
  styleUrls: ['./caret.component.css']
})
export class CaretComponent implements OnInit, OnChanges {
  @Input() alive: boolean;

  visible: boolean;
  caretTimer: Timer;

  ngOnInit() {
    if (this.alive == null) {
      this.alive = true;
    }

    this.caretTimer = setInterval(() => {
      this.toggleVisible();
    }, 500);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!this.alive) {
      this.kill();
    }
  }

  private toggleVisible() {
    this.visible = !this.visible;
  }

  private kill() {
    setTimeout(() => {
      clearInterval(this.caretTimer);
    }, 1000);
  }
}
