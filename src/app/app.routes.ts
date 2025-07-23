import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { FrameworkComponent } from './pages/framework/framework.component';

export const routes: Routes = [
    { path: "home", component: HomeComponent},
    { path: "courses", component: CoursesComponent},
    { path: "framwork", component:FrameworkComponent},
    { path: "", redirectTo: "home", pathMatch: "full"}

];
