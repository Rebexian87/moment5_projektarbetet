import { Component} from '@angular/core';
import { courses } from '../../models/courses';
import { CoursesService } from '../../services/courses.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { distinct, Subject } from 'rxjs';

import { Router } from '@angular/router';


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

 

  e:any ='';

  showOnlyOne: courses []=[]

  selectedCourse:any

  textOnButton="Lägg till kurs"
 
 


   oldCourseArr: courses[] =[]

  

  constructor(private CoursesService: CoursesService, private router:Router ) {}

     navigateTo() {
    this.router.navigate(['/framework'])
   }

  ngOnInit(): void{
      this.CoursesService.loadCourses().subscribe((courses)=> {this.courses=courses; this.filteredCourses=courses; })  
      this.CoursesService.loadCourses().subscribe((courses)=> {this.showOnlyOne=courses.filter((course, index, self) => self.findIndex(c=>c.subject === course.subject) ===index) })
       
   }

  applyFilter(): void {
   this.filteredCourses=this.courses.filter((course) => course.courseCode.toLowerCase().includes(this.filterValue.toLowerCase()) || course.subject.toLowerCase().includes(this.filterValue.toLowerCase()) || course.courseName.toLowerCase().includes(this.filterValue.toLowerCase()))
      
  }

  sort1(): void{
      this.sortedCourses=this.courses.sort((a, b) => a.courseCode > b.courseCode ? 1:-1)

  }

  sort2(): void{
      this.sortedCourses=this.courses.sort((a, b) => a.courseName > b.courseName ? 1:-1)

  }

   sort3(): void{
      this.sortedCourses=this.courses.sort((a, b) => b.points-a.points)

  }

   sort4(): void{
      this.sortedCourses=this.courses.sort((a, b) => a.subject > b.subject ? 1:-1)

  }
  
   applyFilter2 (e:any):void {
       let push= e.target.value 
       this.filteredCourses= this.courses.filter((course)=>course.subject === push)
      
 }

 showAll():void{
        this.CoursesService.loadCourses().subscribe((courses)=> {this.courses=courses; this.filteredCourses=courses; })  
 }

 

  storeCourse(e:any):void {

    let push= e.target.id

    console.log(push);
  
      
      this.selectedCourse =  this.courses.find((course)=>course.courseCode === push)


     this.oldCourseArr =JSON.parse(localStorage.getItem("courses") as string) || []  // Retrievs already stored data from localstorage and add the data ta an array or get an empty array if there is no data
    
       let oldCourses=this.oldCourseArr.find((course)=>course.courseCode===push)

       console.log(oldCourses);
       

       if(!oldCourses) {
  
   this.oldCourseArr.push(this.selectedCourse)  //Add new course}

   localStorage.setItem("courses", JSON.stringify(this.oldCourseArr.flat())) 

  //  if(this.selectedCourse) { this.textOnButton="Tillagd"}
  
    // this.textOnButton="Tillagd"
  }

 
}



      

}


