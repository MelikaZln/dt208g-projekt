import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { SelectedCoursesService } from '../services/selected-courses.service';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from '../courses/courses.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  standalone: true,
  imports: [CommonModule, CoursesComponent, MatButtonModule, MatButtonModule, MatDividerModule, MatIconModule],
  selector: 'app-selected-courses',
  templateUrl: './selected-courses.component.html',
  styleUrls: ['./selected-courses.component.css']
  
})
export class SelectedCoursesComponent  implements OnInit {
  selectedCourses: Course[] = [];
  totalPoint : number = 0 ;

  constructor(private selectedCoursesService: SelectedCoursesService) {}

  ngOnInit(): void {
    this.selectedCourses = this.selectedCoursesService.getSelectedCourses();
  }
  sortTableBy(property: keyof Course): void {
    this.selectedCourses.sort((a, b) => (a[property] > b[property]) ? 1 : ((b[property] > a[property]) ? -1 : 0));
    
  }
  removeCourse(course: Course): void {
    this.selectedCoursesService.removeCourse(course);
    this.selectedCourses = this.selectedCoursesService.getSelectedCourses(); 
  }
  getTotalPoints(): number {
    return this.selectedCourses.reduce((total, course) => total + course.points, 0);
  }
  }
