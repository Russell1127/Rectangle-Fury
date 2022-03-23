import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RectangleService } from '../rectangle.service';

@Component({
  selector: 'app-shape-canvas',
  templateUrl: './shape-canvas.component.html',
  styleUrls: ['./shape-canvas.component.scss']
})
export class ShapeCanvasComponent implements OnInit {
  @ViewChild('rectangleOne', { static: true }) rectangleOne: ElementRef<HTMLElement>;
  @ViewChild('rectangleTwo', { static: true }) rectangleTwo: ElementRef<HTMLElement>;

  constructor(private rectangleService: RectangleService) {
    this.rectangleOne = {} as ElementRef;
    this.rectangleTwo = {} as ElementRef;
  }

  ngOnInit(): void {
    this.rectangleOne.nativeElement.style.setProperty('display', 'none');
    this.rectangleTwo.nativeElement.style.setProperty('display', 'none');

    this.rectangleService.rectangleOneSubject.subscribe(rectangle => {   
      this.rectangleOne.nativeElement.style.removeProperty('display');  
      this.setRectangleOneStyle(rectangle.width.toString(), rectangle.height.toString(), rectangle.x.toString(), rectangle.y.toString());
    });

    this.rectangleService.rectangleTwoSubject.subscribe(rectangle => {
      this.rectangleTwo.nativeElement.style.removeProperty('display');
      this.setRectangleTwoStyle(rectangle.width.toString(), rectangle.height.toString(), rectangle.x.toString(), rectangle.y.toString());
    });
  }

  setRectangleOneStyle(width: string, height: string, x: string, y: string) {
    this.rectangleOne?.nativeElement.style.setProperty('top', y + 'px') 
    this.rectangleOne?.nativeElement.style.setProperty('left', x + 'px') 
    this.rectangleOne?.nativeElement.style.setProperty('width', width + 'px');
    this.rectangleOne?.nativeElement.style.setProperty('height', height + 'px') 
  }

  setRectangleTwoStyle(width: string, height: string, x: string, y: string) {    
    this.rectangleTwo?.nativeElement.style.setProperty('top', y + 'px') 
    this.rectangleTwo?.nativeElement.style.setProperty('left', x + 'px') 
    this.rectangleTwo?.nativeElement.style.setProperty('width', width + 'px');
    this.rectangleTwo?.nativeElement.style.setProperty('height', height + 'px') 
  }

}
