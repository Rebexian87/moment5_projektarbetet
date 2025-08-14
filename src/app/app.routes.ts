import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { FrameworkComponent } from './pages/framework/framework.component';

//The routes
export const routes: Routes = [
    { path: "home", component: HomeComponent},
    { path: "courses", component: CoursesComponent},
    { path: "framework", component:FrameworkComponent},
    { path: "", redirectTo: "home", pathMatch: "full"}

];
