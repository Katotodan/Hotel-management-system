import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  urlList:string[] = [
    "https://digital.ihg.com/is/image/ihg/even-hotels-eugene-5405616297-4x3",
    "https://thearchitecturedesigns.com/wp-content/uploads/2019/12/9-Corinthia-Hotel-London.jpg",
    "https://media.architecturaldigest.com/photos/57e42deafe422b3e29b7e790/master/pass/JW_LosCabos_2015_MainExterior.jpg",
    "https://lajollamom.com/wp-content/uploads/2019/01/Fairmont-Grand-Del-Mar-luxury-hotel-scaled.jpg"
  ]
  
  private subscription!: Subscription;
  private isActive = true;  // To manage component active state
  index:number = 0
  displayUrl: string = this.urlList[this.index]


  ngOnInit() {
    this.subscription = interval(3000).pipe(
      takeWhile(() => this.isActive)  // Automatically unsubscribe when component is destroyed
    ).subscribe(() => {
      this.index++
      if(this.index > 3){
        this.index = 0
      }
      this.displayUrl = this.urlList[this.index]
    });
  }

  // ngOnDestroy() {
  //   this.isActive = false;
  //   if (this.subscription) {
  //     this.subscription.unsubscribe();
  //   }
  // }
}
