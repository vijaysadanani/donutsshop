import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Donutdetail } from 'src/app/interfaces/donutdetail';
import { DonutService } from 'src/app/services/donut.service';

@Component({
  selector: 'app-donutdetail',
  templateUrl: './donutdetail.component.html',
  styleUrls: ['./donutdetail.component.css']
})
export class DonutdetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private donutService: DonutService, private router: Router) { }
  donutId: number = 0;
  donutDetails!: Donutdetail;
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.donutId = Number(params.get('id'));
      this.donutService.getDonutById(this.donutId).subscribe((res) => this.populateDonutDetail(res));
    });
  }

  populateDonutDetail(donutDetails: Donutdetail) {
    this.donutDetails = donutDetails;
  }

  addToCart(){
    this.donutService.addToCart(this.donutDetails);
    this.router.navigate(['donutHome']);
  }

}
