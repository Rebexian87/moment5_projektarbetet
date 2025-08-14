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

  //Variables with types
  courses: courses[] = [];

  filteredCourses: courses [] = [];

  filterValue: string='';

  sortedCourses: courses [] = [];

  e:any ='';

  showOnlyOne: courses []=[]

  selectedCourse:any

  textOnButton="Lägg till kurs" 

  oldCourseArr: courses[] =[]

  
  //Constructor with CoursesService and RouterImport
  constructor(private CoursesService: CoursesService, private router:Router ) {}

 
  // This happens when page initials, for example it loads the courses 
  ngOnInit(): void{
    //loadcourses with help from CoursesService
      this.CoursesService.loadCourses().subscribe((courses)=> {this.courses=courses; this.filteredCourses=courses; })  
      this.CoursesService.loadCourses().subscribe((courses)=> {this.showOnlyOne=courses.filter((course, index, self) => self.findIndex(c=>c.subject === course.subject) ===index) })
    }

  //Function that navigates a user to a different site
  navigateTo() {
      this.router.navigate(['/framework'])
    }
  
  //Function that filter courses depending on that users write  
  applyFilter(): void {
    this.filteredCourses=this.courses.filter((course) => course.courseCode.toLowerCase().includes(this.filterValue.toLowerCase()) || course.subject.toLowerCase().includes(this.filterValue.toLowerCase()) || course.courseName.toLowerCase().includes(this.filterValue.toLowerCase()))
  }

  // The following four sortfunctions sort the coloumn when you press on the heading
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
  
  // When you change the subject from the selectelement this function filter out what subject you choose. 
  applyFilter2 (e:any):void {
       let push= e.target.value //the subject you choose
       this.filteredCourses= this.courses.filter((course)=>course.subject === push)     
      }

  // When you select all courses this function let you see all courses
  showAll():void{
        this.CoursesService.loadCourses().subscribe((courses)=> {this.courses=courses; this.filteredCourses=courses; })  
      } 
  
  //This function stores the chooses course to localstorage
  storeCourse(e:any):void {
        let push= e.target.id   //The id of the choosen course/button
        
        this.selectedCourse =  this.courses.find((course)=>course.courseCode === push) //this finds the choosen course with that coursecode
        
        this.oldCourseArr =JSON.parse(localStorage.getItem("courses") as string) || []  // Retrievs already stored data from localstorage and add the data ta an array or get an empty array if there is no data
    
        let oldCourses=this.oldCourseArr.find((course)=>course.courseCode===push) //this finds the choosen course with that coursecode
        
        if(!oldCourses) { //if the choosen course isn´t already in the localstorage push a new course
  
        this.oldCourseArr.push(this.selectedCourse)  //Add new course}

        localStorage.setItem("courses", JSON.stringify(this.oldCourseArr.flat())) //Flat() makes it so that a extra layer of [] disapear

  }
 
}



      

}


