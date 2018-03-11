import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TypewriterComponent } from './console/typewriter/typewriter.component';
import { InterviewerComponent } from './console/interviewer/interviewer.component';
import { CaretComponent } from './console/caret/caret.component';
import { IntroComponent } from './intro/intro.component';
import { ConsoleComponent } from './console/console.component';
import { TypewriterHostDirective } from './directives/typewriter-host.directive';


@NgModule({
  declarations: [
    AppComponent,
    TypewriterComponent,
    InterviewerComponent,
    CaretComponent,
    IntroComponent,
    ConsoleComponent,
    TypewriterHostDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ TypewriterComponent],
})
export class AppModule { }
