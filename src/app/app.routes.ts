import { Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { SelectedCoursesComponent } from './selected-courses/selected-courses.component';
import { NavMenyComponent } from './nav-meny/nav-meny.component';
import { HemsidaComponent } from './hemsida/hemsida.component';

export const routes: Routes = [
    {path: "courses", component: CoursesComponent},
    {path: '', redirectTo: '/hemsida' , pathMatch: 'full'},
    {path: 'selected-courses', component: SelectedCoursesComponent},
    {path: 'nav-meny', component: NavMenyComponent},
    {path: 'hemsida', component: HemsidaComponent},
];
