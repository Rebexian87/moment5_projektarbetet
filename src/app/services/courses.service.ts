import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { courses } from '../models/courses';
import { Observable } from 'rxjs';
import { test } from '../models/test';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {
   url: string = "miun_courses.json";

  constructor(private http: HttpClient){ }

  // http = inject(HttpClient);

  // Läs in kurser

  loadCourses(): Observable<courses[]> {

    return this.http.get<courses[]>(this.url);
   

  }

    loadCourses2(): Observable<test[]> {

    return this.http.get<test[]>(this.url);
   

  }

  
   

}
