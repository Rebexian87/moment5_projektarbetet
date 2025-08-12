import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-mainmenu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './mainmenu.component.html',
  styleUrl: './mainmenu.component.css'
})
export class MainmenuComponent {


    logoImage: string = "logo.svg"; 
   logoImage2: string = "logo2.svg"; 
   

    

}
