import { Component, ContentChildren, QueryList, AfterViewInit } from '@angular/core';
import { AccordionPanelComponent } from './accordion-panel.component';
import { AccordionService } from './accordion.service';
import { AccordionPanel } from './accordion-panel';

@Component({
  selector: 'pa-accordion',
  templateUrl: './accordion.component.html'
})
export class AccordionComponent {
  @ContentChildren(AccordionPanel) panels: QueryList<AccordionPanel>;

  constructor(private accordionService: AccordionService) { }

  ngAfterViewInit() { }

  openAll() {
    this.panels.forEach(panel => panel.expanded = true);
  }

  closeAll() {
    this.panels.forEach(panel => panel.expanded = false);
  }

  toggleAll() {
    const isAnyPanelNotExpanded = this.panels.some(panel => { 
      console.log('panel', panel.expanded);
      return panel.expanded === false; 
    });
    console.log('isAnyPanelExpanded', isAnyPanelNotExpanded);
    if(isAnyPanelNotExpanded) {
      this.openAll();
    } else {
      this.closeAll();
    }
  }
}