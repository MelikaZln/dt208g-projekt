import { Injectable } from '@angular/core';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class SelectedCoursesService {
  private selectedCoursesKey = 'selectedCourses';

  constructor() {
    const savedCourses = localStorage.getItem(this.selectedCoursesKey);
    this.selectedCourses = savedCourses ? JSON.parse(savedCourses) : [];
  }

  private selectedCourses: Course[] = [];
  addCourse(course: Course): void {
    if (!this.selectedCourses.some(c => c.courseCode === course.courseCode)) {
      this.selectedCourses.push(course);
      this.saveCourses();
    }
  }

  removeCourse(course: Course): void {
    const index = this.selectedCourses.findIndex(c => c.courseCode === course.courseCode);
    if (index !== -1) {
      this.selectedCourses.splice(index, 1);
      this.saveCourses();
    }
  }

  getSelectedCourses(): Course[] {
    return this.selectedCourses;
  }
  private saveCourses(): void {
    localStorage.setItem(this.selectedCoursesKey, JSON.stringify(this.selectedCourses));
  }
}