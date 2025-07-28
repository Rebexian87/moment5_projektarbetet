import { Component} from '@angular/core';
import { courses } from '../../models/courses';
import { CoursesService } from '../../services/courses.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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

  test: object = {};

  e:any ='';

  showOnlyOne: courses []=[]

  // oldCourseArr: courses[] =[]

  

  constructor(private CoursesService: CoursesService) {}

  ngOnInit(){
      this.CoursesService.loadCourses().subscribe((courses)=> {this.courses=courses; this.filteredCourses=courses; })
 
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

      // console.log(push);
       

          this.filteredCourses= this.courses.filter((course)=>course.subject === push)
          console.log(this.filteredCourses);
          


   }


  //  showOne(): void {
  //   let showValue = new Set <courses> () ;
  //   for (const value of this.courses) {
  //     if(!showValue.has(value)) {
  //       this.showOnlyOne.push(value);
  //       showValue.add(value)
  //     }
  //   }
  //  }



   
   
storeCourse(e:any):void {



  let push= e.target.id

  console.log(push);
  
      
       let selectedCourse =  this.courses.find((course)=>course.courseCode === push)
     let oldCourseArr =JSON.parse(localStorage.getItem("courses") as string) || []  // Retrievs already stored data from localstorage and add the data ta an array or get an empty array if there is no data
    
    // this.test =  this.courses.filter((course)=>course.courseCode === push)
     console.log(this.test);
     
   oldCourseArr.push(selectedCourse)  //Add new course
   localStorage.setItem("courses", JSON.stringify(oldCourseArr)) 
}

}


