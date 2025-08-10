import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { courses } from '../models/courses';

@Injectable({
  providedIn: 'root'
})
export class FrameworkService {

   courses: courses[] = [];

    loadCourses(key:string): any{

      

      
        return JSON.parse(localStorage.getItem(key) as string).filter((course:any, index:number, self:any) => self.findIndex((c:any)=>c.courseCode === course.courseCode) ===index); //.filter((course:any, index:number, self:any) => self.findIndex((c:any)=>c.courseCode === course.courseCode) ===index);}
        // this.showOnlyOne=this.filteredCourses
        // console.log(this.filteredCourses[0]);

  }

  

  
  // loadCourses(): Observable<courses[]> {

  //   return this.http.get<courses[]>(this.url);
   

  // }

  }




