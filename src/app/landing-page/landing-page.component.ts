import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-landing-page',
  imports: [
    RouterLink,
    HeaderComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
