import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { Rectangle } from './rectagle.model';

@Injectable({
  providedIn: 'root'
})
export class RectangleService {
  rectangleOneSubject: Subject<Rectangle>;
  rectangleTwoSubject: Subject<Rectangle>;

  currentRectangleOneValue: Rectangle | null;
  currentRectangleTwoValue: Rectangle | null;

  constructor(private http: HttpClient) {
    this.rectangleOneSubject = new Subject<Rectangle>();
    this.rectangleTwoSubject = new Subject<Rectangle>();
    this.currentRectangleOneValue = null;
    this.currentRectangleTwoValue = null;

    this.rectangleOneSubject.subscribe(rectangle => this.currentRectangleOneValue = rectangle);
    this.rectangleTwoSubject.subscribe(rectangle => this.currentRectangleTwoValue = rectangle);
   }

   checkContains(): Observable<boolean> {
     let headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

     return this.http
      .post<boolean>('http://localhost:8080/api/rectangles/contained', [this.currentRectangleOneValue, this.currentRectangleTwoValue], {headers: headers});
   }

   checkIntersecting(): Observable<boolean> {
    let headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

    return this.http
     .post<boolean>('http://localhost:8080/api/rectangles/intersect', [this.currentRectangleOneValue, this.currentRectangleTwoValue], {headers: headers});
   }

   checkAdjacent(): Observable<boolean> {
    let headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

    return this.http
     .post<boolean>('http://localhost:8080/api/rectangles/adjacent', [this.currentRectangleOneValue, this.currentRectangleTwoValue], {headers: headers});
   }
}
