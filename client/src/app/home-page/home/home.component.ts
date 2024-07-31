import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from '../banner/banner.component';
import { ServicesComponent } from '../services/services.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    BannerComponent,
    ServicesComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
