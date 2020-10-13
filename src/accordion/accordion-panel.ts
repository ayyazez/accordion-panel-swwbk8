import { EventEmitter } from '@angular/core';

export class AccordionPanel {
  expanded: boolean;
  opened: EventEmitter<any>;
  closed: EventEmitter<any>;
}