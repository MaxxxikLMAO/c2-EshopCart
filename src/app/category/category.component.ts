import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryService} from '../Services/category.service';
import {HttpClient} from '@angular/common/http';
import {CategoryInfo} from '../../CategoryInfo.model';
import {Product} from '../../Product.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  public categories: CategoryInfo;
  public prdct: Product[];
  p: number=1;

  constructor(private httpClient: HttpClient, private ctgry: CategoryService, private route: ActivatedRoute, private router: Router) {
  }

  getLink(id) {
    this.router.navigate(['/products'], {queryParams: {id}});
  }
  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.ctgry.getCategoryById(params.id)
          .subscribe((category: CategoryInfo) => {
            this.categories = category;
            this.prdct = category.products;
            console.log(this.prdct);
          });
      });

  }
}
