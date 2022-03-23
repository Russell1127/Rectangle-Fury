import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StatusService {
  trueResponse: Subject<boolean>;
  falseResponse: Subject<boolean>;

  constructor() {
    this.trueResponse = new Subject<boolean>();
    this.falseResponse = new Subject<boolean>();
  }
}
