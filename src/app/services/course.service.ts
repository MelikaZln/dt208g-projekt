import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private url: string = "assets/miun_courses.json";
  private courses: Course[] = [];
  selectedCourses: string[] = [];

  constructor(private http: HttpClient) {
    this.getCourses().subscribe(courses => {
      this.courses = courses; 
    });
  }
  addCourse(course: string) {
    this.selectedCourses.push(course);
  }
  getSelectedCourses() {
    return this.selectedCourses;
  }
  
  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.url);
  }


}