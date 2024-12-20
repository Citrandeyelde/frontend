import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { RouterLink, RouterModule, RouterOutlet, Routes } from '@angular/router';
import { routes } from '../../app.routes';


@Component({
  selector: 'app-header',
  imports: [MatToolbarModule,MatButtonModule, MatIconModule,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
 
}
