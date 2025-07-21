import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { courses } from '../models/courses';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
   url: string = "https://matdah.github.io/DT208G---Programmering-i-TypeScript/Moment%205%20-%20Projekt/miun_courses.json";

  constructor(private http: HttpClient){ }

  // http = inject(HttpClient);

  // Läs in kurser

  loadCourses(): Observable<courses[]> {

    return this.http.get<courses[]>(this.url);
   

  }

  
   

}
