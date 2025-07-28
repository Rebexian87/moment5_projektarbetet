import { Component } from '@angular/core';
import { courses } from '../../models/courses';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FrameworkService } from '../../services/framework.service';

@Component({
  selector: 'app-framework',
  imports: [FormsModule, CommonModule],
  templateUrl: './framework.component.html',
  styleUrl: './framework.component.css'
})
export class FrameworkComponent {
  [x: string]: any;

  
  constructor(private FrameworkService: FrameworkService ) {}


    storageCourses: courses[] = [];

  courses: courses[] = [];

    filteredCourses: courses [] = [];

    removeCourse: courses [] = [];

    storage:any

     e:any ='';


   ngOnInit(){

    // this.filteredCourses=JSON.parse(localStorage.getItem("courses") as string)

    // for (let i=0; i<this.filteredCourses.length; i++) {

    // }
  this.loadItems()


    console.log(this.filteredCourses);
    


      //  this.FrameworkService.loadCourses().subscribe((courses)=> {this.courses=courses; this.filteredCourses=JSON.parse(localStorage.getItem("courses") as string); })
    //  console.log(this.filteredCourses);
    //            let storage = JSON.parse(localStorage.getItem("courses") as any)

          //  for (let i = 0; i<storage.length;i++) {
          //      console.log(storage[i].code)
          //  } 

     
      
  }

      loadItems(): void {
          this.filteredCourses=JSON.parse(localStorage.getItem("courses") as string).flat()
          
    }
    
   applyFilter ():void {
          
      //  let storage = JSON.parse(localStorage.getItem("courses") as any)
      //   return storage.map((c: {   courseCode:string; courseName:string;points:number; progression:string; subject:string; syllabus:string}) =>
      //   new courses(c.courseCode, c.courseName,c.points,c.progression, c.subject, c.syllabus)
      //   )

          // this.filteredCourses=
          // for(let i=0; i<this.filteredCourses.length; i++) {
            
          // // }
          //  let storageCourses = JSON.parse(localStorage.getItem("courses") as any)

          //  for (let i = 0; i<storage.length;i++) {
          //      console.log(storage[i].code)
          //  } 

 
           


   }

    



}


