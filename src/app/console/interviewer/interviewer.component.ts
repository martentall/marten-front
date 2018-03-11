import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'cv-interviewer',
  templateUrl: './interviewer.component.html',
  styleUrls: ['./interviewer.component.css']
})
export class InterviewerComponent implements OnInit {

  input: string;

  ngOnInit(): void {
    this.input = '';
  }

  @HostListener('document:keypress', ['$event'])
  handleKeypressEvent(event: KeyboardEvent) {
      if (event.key !== 'Enter') {
        this.input += event.key;
      }
  }

  @HostListener('document:keydown', ['$event'])
  handleKeydownEvent(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      console.log(this.input);
    } else if (event.key === 'Backspace') {
      let length = this.input.length;
      if (length > 0) {
        this.input = this.input.substr(0, this.input.length-1);
      }
    }
  }

}
