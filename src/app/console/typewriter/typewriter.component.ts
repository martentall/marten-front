import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {TextRow} from "../models/text-row";

@Component({
  selector: 'cv-typewriter',
  templateUrl: './typewriter.component.html',
  styleUrls: ['./typewriter.component.css']
})
export class TypewriterComponent implements OnInit {
  @Input() textRow: TextRow;

  @Output() typewriterEvent = new EventEmitter<string>();

  writtenText: string;
  showCaret: boolean;

  constructor() {
    this.writtenText = '';
    this.showCaret = true;
  }

  ngOnInit(): void {
    console.log(this.textRow);
    this.typeRow(this.textRow);
  }

  private typeRow(text) {
    setTimeout(() => {this.typeLetter(this, text)}, 1000);
  }

  private typeLetter(self, textRow) {
    if (textRow.isAtEnd()) {
      this.showCaret = false;
      this.typewriterEvent.emit("typewriter-ended");
      return;
    }

    self.writtenText += textRow.getCaretChar();
    textRow.shiftCaret();
    setTimeout(() => {this.typeLetter(self, textRow)}, randomIntFromInterval(10, 200));

    function randomIntFromInterval(min,max) {
      return Math.floor(Math.random()*(max-min+1)+min);
    }
  }

}
