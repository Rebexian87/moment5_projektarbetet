import { Component} from '@angular/core';
import { courses } from '../../models/courses';
import { CoursesService } from '../../services/courses.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from '../courses/courses.component';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  frontImage: string = "bild1.jpg"; 
  imageGrasFlowers: string = "blommor.jpg"; //https://pixabay.com/sv/photos/blomster%C3%A4ng-v%C3%A5r-natur-%C3%A4ng-n%C3%A4rbild-7955256/
  imageStudent:string="bildStudent.png"
  imageBooks:string="bildBooks.jpg"
   constructor(private router:Router) {}

   navigateTo() {
    this.router.navigate(['/courses'])
   }

 
   //https://pixabay.com/sv/illustrations/sk%C3%B6nhet-sk%C3%B6n-kvinna-h%C3%A4lsa-l%C3%A4sning-9596371/

  // https://pixabay.com/sv/illustrations/student-informationssystem-2317832/

  // courses: courses[] = [];

  // filteredCourses: courses [] = [];

  // filterValue: string='';

  // sortedCourses: courses [] = [];



  

  // constructor(private CoursesService: CoursesService) {}

  // ngOnInit(){
  //     this.CoursesService.loadCourses().subscribe((courses)=> {this.courses=courses; this.filteredCourses=courses; })


   
  // }



  // applyFilter(): void {
  //  this.filteredCourses=this.courses.filter((course) => course.code.toLowerCase().includes(this.filterValue.toLowerCase()) || course.coursename.toLowerCase().includes(this.filterValue.toLowerCase()))
      
  // }

  // sort1(): void{
  //     this.sortedCourses=this.courses.sort((a, b) => a.code > b.code ? 1:-1)

  // }

  // sort2(): void{
  //     this.sortedCourses=this.courses.sort((a, b) => a.coursename > b.coursename ? 1:-1)

  // }

  //  sort3(): void{
  //     this.sortedCourses=this.courses.sort((a, b) => a.progression > b.progression ? 1:-1)

  // }

}
