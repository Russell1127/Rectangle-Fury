import { Component, OnInit } from '@angular/core';
import { StatusService } from './status.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  showTrueStatus: boolean;
  showFalseStatus: boolean;
  title = 'Rectangle Fury';

  constructor(private statusService: StatusService) {
    this.showTrueStatus = false;
    this.showFalseStatus = false;
  }

  ngOnInit(): void {
    this.statusService.trueResponse.subscribe(() => {
      this.showTrueStatus = true;

      setTimeout(() => {
        this.showTrueStatus = false;
      }, 3100);
    });

    this.statusService.falseResponse.subscribe(() => {
      this.showFalseStatus = true;

      setTimeout(() => {
        this.showFalseStatus = false;
      }, 3100);
    });
  }
}
