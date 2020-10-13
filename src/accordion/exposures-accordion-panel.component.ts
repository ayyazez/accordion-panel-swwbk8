import { Component, ViewChild } from '@angular/core';
import {AccordionPanel} from './accordion-panel';
import { AccordionPanelComponent } from './accordion-panel.component';

@Component({
  selector: 'ad-exposures-accordian-panel',
  template: `
  <pa-accordion-panel [expanded]="expanded">
    <span panel-header>Test</span>
    <h4>Testing accordion 3</h4>
  </pa-accordion-panel>
  `,
  providers: [{ provide: AccordionPanel, useExisting: ExposuresAccordionPanelComponent }]
})
export class ExposuresAccordionPanelComponent {
  expanded: boolean;
  @ViewChild(AccordionPanelComponent) panel: AccordionPanelComponent;
  
  exposuresNext() {

  }
}