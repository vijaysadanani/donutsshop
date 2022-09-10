import { Component } from '@angular/core';
import { Donuts, Result } from './interfaces/donut';
import { DonutService } from './services/donut.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'donutshop';

  donuts!: Donuts;
  constructor(private donutService: DonutService) {}
  ngOnInit(){
    this.getAllDonuts();
  }

  getAllDonuts() {
    this.donutService.getAllDonuts().subscribe((res) =>  this.populateDonuts(res));
  }

  populateDonuts(donuts: Donuts) {
      this.donuts = donuts;
      console.log(this.donuts.results);
  }


}
