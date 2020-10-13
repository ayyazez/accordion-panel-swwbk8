import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AccordionService {
  panels = new BehaviorSubject([]);

  constructor() {}

  toggleAll() {

  }
}