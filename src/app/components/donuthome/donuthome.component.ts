import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Donuts } from 'src/app/interfaces/donut';
import { DonutService } from 'src/app/services/donut.service';

@Component({
  selector: 'app-donuthome',
  templateUrl: './donuthome.component.html',
  styleUrls: ['./donuthome.component.css']
})
export class DonuthomeComponent implements OnInit {

  donuts!: Donuts;
  constructor(private donutService: DonutService, private router: Router) {}
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

  navigateToHome(){
    this.router.navigate(['donutHome']);
  }
  navigateToCart(){
    this.router.navigate(['cart']);
  }
}
