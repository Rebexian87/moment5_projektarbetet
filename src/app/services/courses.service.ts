import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { courses } from '../models/courses';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class CoursesService {
   url: string = "miun_courses.json";

  constructor(private http: HttpClient){ }


  // Reads courses from API

    loadCourses(): Observable<courses[]> {

    return this.http.get<courses[]>(this.url);
   
  }  
   

}
