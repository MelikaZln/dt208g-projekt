import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { SelectedCoursesComponent} from './selected-courses/selected-courses.component'

const routes: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  { path: 'courses', component: CoursesComponent },
  { path: 'selected-courses', component: SelectedCoursesComponent }
];

@NgModule ({
  imports: [RouterModule.forRoot(routes), 
    MatSlideToggleModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
class AppModule {}