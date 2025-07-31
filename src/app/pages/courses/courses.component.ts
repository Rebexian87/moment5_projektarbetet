import { Component} from '@angular/core';
import { courses } from '../../models/courses';
import { CoursesService } from '../../services/courses.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { distinct, Subject } from 'rxjs';
import { test } from '../../models/test';

@Component({
  selector: 'app-courses',
  imports: [FormsModule, CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {


  courses: courses[] = [];

  filteredCourses: courses [] = [];

  filterValue: string='';

  sortedCourses: courses [] = [];

  test: test[]=[];

  e:any ='';

  showOnlyOne: test []=[]
 
 


   oldCourseArr: courses[] =[]

  

  constructor(private CoursesService: CoursesService) {}

  ngOnInit(): void{
      this.CoursesService.loadCourses().subscribe((courses)=> {this.courses=courses; this.filteredCourses=courses; })  
      this.CoursesService.loadCourses().subscribe((test)=> {this.showOnlyOne=test.filter((course, index, self) => self.findIndex(c=>c.subject === course.subject) ===index) })
            console.log(this.showOnlyOne);

 
  
    }


 

  applyFilter(): void {
   this.filteredCourses=this.courses.filter((course) => course.courseCode.toLowerCase().includes(this.filterValue.toLowerCase()) || course.subject.toLowerCase().includes(this.filterValue.toLowerCase()))
      
  }

  sort1(): void{
      this.sortedCourses=this.courses.sort((a, b) => a.courseCode > b.courseCode ? 1:-1)

  }

  sort2(): void{
      this.sortedCourses=this.courses.sort((a, b) => a.courseName > b.courseName ? 1:-1)

  }

   sort3(): void{
      this.sortedCourses=this.courses.sort((a, b) => a.progression > b.progression ? 1:-1)

  }
  
   applyFilter2 (e:any):void {
       let push= e.target.id

   
       

          this.filteredCourses= this.courses.filter((course)=>course.subject === push)
      


   }




   
   
storeCourse(e:any):void {



  let push= e.target.id

  console.log(push);
  
      
       let selectedCourse =  this.courses.find((course)=>course.courseCode === push)

     let oldCourseArr =JSON.parse(localStorage.getItem("courses") as string) || []  // Retrievs already stored data from localstorage and add the data ta an array or get an empty array if there is no data
    


   oldCourseArr.push(selectedCourse)  //Add new course}

   localStorage.setItem("courses", JSON.stringify(oldCourseArr.flat())) 
}

}


