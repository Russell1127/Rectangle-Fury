import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Rectangle } from 'src/app/rectagle.model';
import { RectangleService } from 'src/app/rectangle.service';

@Component({
  selector: 'app-rectangle-form',
  templateUrl: './rectangle-form.component.html',
  styleUrls: ['./rectangle-form.component.scss']
})
export class RectangleFormComponent implements OnInit {
  @Input() formName: string = "";
  @Input() observableData: Subject<Rectangle> | null = null;
  @Output() onRectangleUpdated: EventEmitter<Rectangle>
  
  rectangleForm: FormGroup;

  constructor(private rectangleService: RectangleService) {
    this.onRectangleUpdated = new EventEmitter<Rectangle>();
    this.rectangleForm = this.buildRectangleForm();
  }

  ngOnInit(): void {
    if (this.observableData) {
      this.observableData.subscribe(rectangle => {
        this.rectangleForm.get('x')?.setValue(rectangle.x);
        this.rectangleForm.get('y')?.setValue(rectangle.y);
        this.rectangleForm.get('width')?.setValue(rectangle.width);
        this.rectangleForm.get('height')?.setValue(rectangle.height);
      });
    }
  }

  rectangleFormSubmitted() {
    const newRectangle: Rectangle = this.rectangleForm.value;
    this.onRectangleUpdated.emit(newRectangle);
  }

  buildRectangleForm(): FormGroup {
    const fg: FormGroup = new FormGroup({
      'x': new FormControl(0, [Validators.max(1000), Validators.min(0)]),
      'y': new FormControl(0, [Validators.max(1000), Validators.min(0)]),
      'width': new FormControl(0, [Validators.max(1000), Validators.min(0)]),
      'height': new FormControl(0, [Validators.max(1000), Validators.min(0)])
    });

    return fg;
  }

}
