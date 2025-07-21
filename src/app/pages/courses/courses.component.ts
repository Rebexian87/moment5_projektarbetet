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
  
  filterSelect ():void {
    
  }

}
