import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Rectangle } from '../rectagle.model';
import { RectangleService } from '../rectangle.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  rectangleOneSubject: Subject<Rectangle>;
  rectangleTwoSubject: Subject<Rectangle>;
  selectedRectangles: Rectangle[];

  constructor(private rectangleService: RectangleService) {
    this.rectangleOneSubject = rectangleService.rectangleOneSubject;
    this.rectangleTwoSubject = rectangleService.rectangleTwoSubject;
    this.selectedRectangles = [];
  }

  ngOnInit(): void {
  }

  rectangleOneUpdated(rectangle: Rectangle) {
    this.rectangleService.rectangleOneSubject.next(rectangle);
  }

  rectangleTwoUpdated(rectangle: Rectangle) {
    this.rectangleService.rectangleTwoSubject.next(rectangle);
  }

  useCases = [
    { name: "Bad Use Case", value: [{x: 400, y: 400, width: 400, height: 300}, {x: 900, y: 400, width: 400, height: 300}] },
    { name: "Intersecting", value: [{x: 525, y: 300, width: 400, height: 300}, {x: 700, y: 400, width: 400, height: 300}] },
    { name: "Contains", value: [{x: 650, y: 400, width: 400, height: 300}, {x: 725, y: 475, width: 250, height: 150}] },
    { name: "Adjacent Sub-Line", value: [{x: 425, y: 400, width: 400, height: 300}, {x: 825, y: 475, width: 250, height: 150}] },
    { name: "Adjacent Proper", value: [{x: 425, y: 400, width: 400, height: 300}, {x: 825, y: 400, width: 400, height: 300}] },
    { name: "Adjacent Partial", value: [{x: 425, y: 300, width: 400, height: 300}, {x: 825, y: 500, width: 400, height: 300}] }
  ];

  setRectangles() {
    this.rectangleService.rectangleOneSubject.next(this.selectedRectangles[0]);
    this.rectangleService.rectangleTwoSubject.next(this.selectedRectangles[1]);
  }
}
