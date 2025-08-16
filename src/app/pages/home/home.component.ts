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

  //Variables with types
  frontImage: string = "bild1.jpg"; 
  imageGrasFlowers: string = "blommor.jpg"; //https://pixabay.com/sv/photos/blomster%C3%A4ng-v%C3%A5r-natur-%C3%A4ng-n%C3%A4rbild-7955256/
  imageStudent:string="bildStudent.png" //https://pixabay.com/sv/illustrations/sk%C3%B6nhet-sk%C3%B6n-kvinna-h%C3%A4lsa-l%C3%A4sning-9596371/
  imageBooks:string="bildBooks.jpg" // https://pixabay.com/sv/illustrations/student-informationssystem-2317832/
  

  //Constructor with RouterImport
   constructor(private router:Router) {}


   //Function that navigates a user to a different site
   navigateTo() {
    this.router.navigate(['/courses'])

 
   }

}
