import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryService} from '../Services/category.service';
import {Product} from '../../Product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public arr = [];
  public price: number;

  constructor(private activatedRoute: ActivatedRoute, private products: CategoryService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(i => {
      this.products.getProductById(i.id).subscribe((data: Product) => {
        this.arr.push(data);
        console.log(this.arr);
        localStorage.setItem('jsonprodukt', JSON.stringify(this.arr));
        const jsonProdukt = localStorage.getItem('jsonprodukt');
        this.arr = JSON.parse(jsonProdukt);
      });
    });
    const jsonProdukt2 = localStorage.getItem('jsonprodukt');
    this.arr = JSON.parse(jsonProdukt2);
    const result = this.arr.map(res => res.price).reduce((a, b) => a + b, 0);
    this.price = result;
  }

  getLink(id: number) {
    this.router.navigate(['/products'], { queryParams: {id}});
  }

}
