import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../model/course';
import { CourseService, } from '../services/course.service';
import { CommonModule } from '@angular/common';
import {  FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RouterOutlet } from '@angular/router';
import { SelectedCoursesService } from '../services/selected-courses.service';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@Component({
  
  selector: 'app-courses',
  standalone : true,
  imports: [MatIconModule, MatButtonModule, RouterOutlet, MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatInputModule, CommonModule],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})


export class CoursesComponent  implements OnInit {

  Courselist: Course[] = [];
  filterValue: string = "";
  selectedCourse: string = "";
  courses: Course[] = [];
  filteredCourseList: Course[] = [];
  subjects: string[] = []; 
  subject: string = "";
  selectedSubject: string = "";
  selectedCourses: Course[] = [];

  constructor(
    private courseservice: CourseService, 
     private selectedCoursesService: SelectedCoursesService) {}

   ngOnInit(): void {
    this.courseservice.getCourses().subscribe(data => {
      this.Courselist = data;
      this.courses = data; 
      this.subjects = Array.from(new Set(this.courses.map(course => course.subject)));
      this.filteredCourseList = data;
    }); }

  addToSelectedCourses(course: Course): void {
      this.selectedCoursesService.addCourse(course);
    }
  
  sortTableBy(property: keyof Course): void {
    this.filteredCourseList.sort((a, b) => (a[property] > b[property]) ? 1 : ((b[property] > a[property]) ? -1 : 0));
  }

  filterCoursesBySubject(subject: string) {
    console.log(this.filteredCourseList)
    if (subject) {
      this.filteredCourseList = this.courses.filter(course => course.subject === subject);
    } else {
      this.filteredCourseList = [...this.courses]; 
    }
  }


  applyFilter(): void {
    const filterText = this.filterValue.toLowerCase().trim();
    this.filteredCourseList = this.Courselist.filter((course) => 
      (course.courseCode.toLowerCase().includes(filterText) ||
      course.courseName.toLowerCase().includes(filterText))
    );
  }
  }