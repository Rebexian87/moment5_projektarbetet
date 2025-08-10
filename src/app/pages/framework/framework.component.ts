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

     sum: number =0

     showOnyOne: courses []=[]

    


   ngOnInit(){
 

   this.loadItems()
  
    this.add()    
      
  }

      loadItems(): void {
         
        if(JSON.parse(localStorage.getItem("courses") as string)) {
        this.filteredCourses=this.FrameworkService.loadCourses("courses")}
       
        console.log(this.filteredCourses[0]);      
      
      }
  

    
    deleteCourse (e:any):void {
       let push= e.target.id

          delete this.filteredCourses[push]

           localStorage.setItem("courses", JSON.stringify(this.filteredCourses.flat())) 
           this.loadItems()
       
        console.log(push);  
        this.add()
 

      }



    add(): number {
            this.sum=0

              for (let i=0; i<this.filteredCourses.length; i++) {
                  this.sum += this.filteredCourses[i].points
                
    }
         
             console.log(this.sum);
             return this.sum
            
             
    }

}


