import { Component, OnInit } from '@angular/core';
import { RectangleService } from '../rectangle.service';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private rectangleService: RectangleService,
    private statusService: StatusService
  ) {}

  ngOnInit(): void {}

  checkIntersection() {
    this.rectangleService.checkIntersecting().subscribe((intersects) => {
      if (intersects) {
        this.statusService.trueResponse.next(true);
      } else {
        this.statusService.falseResponse.next(false);
      }
    });
  }

  checkContainment() {
    this.rectangleService.checkContains().subscribe((contains) => {
      if (contains) {
        this.statusService.trueResponse.next(true);
      } else {
        this.statusService.falseResponse.next(false);
      }
    });
  }

  checkAdjacency() {
    this.rectangleService.checkAdjacent().subscribe((adjacent) => {
      if (adjacent) {
        this.statusService.trueResponse.next(true);
      } else {
        this.statusService.falseResponse.next(false);
      }
    });
  }
}
