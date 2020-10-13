import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AccordionPanel } from './accordion-panel';

@Component({
  selector: 'pa-accordion-panel',
  templateUrl: './accordion-panel.component.html',
  providers: [{ provide: AccordionPanel, useExisting: AccordionPanelComponent }]
})
export class AccordionPanelComponent  {
  @Input() set expanded(value: boolean) {
    this._expanded = value;
    const emitter = value === true ? this.opened : this.closed;
    emitter.emit();
  }
  get expanded() {
    return this._expanded;
  }
  @Output() opened = new EventEmitter<boolean>();
  @Output() closed = new EventEmitter<boolean>();

  private _expanded = false;
}