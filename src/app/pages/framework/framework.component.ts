import { Component } from '@angular/core';
import { courses } from '../../models/courses';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FrameworkService } from '../../services/framework.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-framework',
  imports: [FormsModule, CommonModule],
  templateUrl: './framework.component.html',
  styleUrl: './framework.component.css'
})
export class FrameworkComponent {
 

  //Constructor with Frameworkervice and RouterImport
  constructor(private FrameworkService: FrameworkService, private router:Router ) {}
   navigateTo() {
    this.router.navigate(['/courses'])
   }

   //Variables with types
    [x: string]: any;
    
    storageCourses: courses[] = [];

    courses: courses[] = [];

    filteredCourses: courses [] = [];

    removeCourse: courses [] = [];

    storage:any

    e:any ='';

    sum: number=0

    showOnyOne: courses []=[]

    

  // This happens when page initials, for example it loads the courses 
   ngOnInit(){
      this.loadItems()
      this.add()    
  }

    //Loads courses from LocalService with help from FrameworkService
    loadItems(): void {
      this.filteredCourses=[]
         
        if(JSON.parse(localStorage.getItem("courses") as string)) {
        this.filteredCourses=this.FrameworkService.loadCourses("courses")}   
       }
    //Delete course with the specifik id from table and localstorage
    deleteCourse (e:any):void {
       let push= e.target.id
       
       delete this.filteredCourses[push]
        
       localStorage.setItem("courses", JSON.stringify(this.filteredCourses.flat())) 
        
        this.loadItems()     
       
        this.add()
      }

    //Function that add all points from the courses that are choosen 
    add(): number {
        this.sum=0
          for (let i=0; i<this.filteredCourses.length; i++) {
              this.sum += this.filteredCourses[i].points              
            }        
           return this.sum        
          }
    
    //Function that clears localstorage and tha table
    clearLocalstorage() {
        localStorage.removeItem("courses")
        
        this.loadItems()   
      }

    }


