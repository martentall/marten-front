import {Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import {ConsoleService} from './console.service';
import {TypewriterHostDirective} from "../directives/typewriter-host.directive";
import {TypewriterComponent} from "./typewriter/typewriter.component";
import {TextRow} from "./models/text-row";

@Component({
  selector: 'console',
  providers: [ConsoleService],
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css']
})
export class ConsoleComponent implements OnInit {

  textRows: Array<string>;
  rowIndex: number = 0;

  showInterviewer: boolean;

  @ViewChild(TypewriterHostDirective) typewriterHost: TypewriterHostDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private _consoleService: ConsoleService) { }

  ngOnInit() {
    this._consoleService.getWelcome().subscribe(
      (data: Array<string>) => { this.textRows = data; },
      (err) => console.error(err), //TODO error handling
      () => { this.addTypewriter(); }
      );
  }

  addTypewriter() {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(TypewriterComponent);
    let viewContainerRef = this.typewriterHost.viewContainerRef;

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<TypewriterComponent>componentRef.instance).textRow = new TextRow(this.textRows[this.rowIndex]);
    (<TypewriterComponent>componentRef.instance).typewriterEvent.subscribe(($event) => this.receiveEvent($event));
  }

  receiveEvent($event) {
    if ($event === 'typewriter-ended') {
      this.rowIndex++;
      if (this.rowIndex < this.textRows.length) {
        this.addTypewriter();
      } else {
        this.showInterviewer = true;
      }
    }
  }


}
