import { Component, ViewChild } from '@angular/core';
import { AccordionService } from './../accordion/accordion.service';
import { AccordionComponent } from './../accordion/accordion.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  @ViewChild(AccordionComponent) accordian: AccordionComponent;
  name = 'Angular';

  constructor(private accordionService: AccordionService) { }

  toggleAll() {
    this.accordian.toggleAll();
  }

  onOpened() {
    console.log('opened!');
  }

  exposuresNext() {

  }
}
