import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Donutdetail } from 'src/app/interfaces/donutdetail';
import { DonutService } from 'src/app/services/donut.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private donutService: DonutService, private router: Router) { }

  cart!: Donutdetail[];
  cartLength: number | undefined;
  totalCalories!: number[];
  sumOfCalories: number | undefined;
  ngOnInit(): void {
    this.cart = JSON.parse(localStorage["cartArray"]);  
    this.cartLength = this.cart.length;
    this.sumOfCalories = this.cart.reduce((accumulator, obj) => {
      return accumulator + obj.calories;
    }, 0);
  }

  removeDonut(cartItem: Donutdetail){
    this.cart.splice(this.cart.indexOf(cartItem), 1);
    localStorage.removeItem("cartArray");
    localStorage.setItem("cartArray", JSON.stringify(this.cart));
    this.cartLength = this.cart.length;
    this.sumOfCalories = this.cart.reduce((accumulator, obj) => {
      return accumulator + obj.calories;
    }, 0);
  }

  navigateToHome(){
    this.router.navigate(['donutHome']);
  }
}
