import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[typewriter-host]'
})

export class TypewriterHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) {
  }
}
