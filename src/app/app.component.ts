import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainmenuComponent } from './partials/mainmenu/mainmenu.component';
import { FooterComponent } from './partials/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainmenuComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'moment4_angular2';
}
