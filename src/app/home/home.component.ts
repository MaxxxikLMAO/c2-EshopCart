import { Component, OnInit } from '@angular/core';
import {Product} from '../../Product.model';
import {HttpClient} from '@angular/common/http';
import {CategoryService} from '../Services/category.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private httpClient: HttpClient, private ctgry: CategoryService, private route: ActivatedRoute) { }

  public prdct: Product[];
  public home;
  ngOnInit(): void {
  }

}
