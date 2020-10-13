import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AccordionComponent } from './accordion.component';
import { AccordionPanelComponent } from './accordion-panel.component';
import { AccordionService } from './accordion.service';
import {ExposuresAccordionPanelComponent } from './exposures-accordion-panel.component';

@NgModule({
  imports: [],
  declarations: [AccordionComponent, AccordionPanelComponent, ExposuresAccordionPanelComponent],
  exports: [AccordionComponent, AccordionPanelComponent, ExposuresAccordionPanelComponent],
  providers: [AccordionService]
})
export class AccordionModule { }