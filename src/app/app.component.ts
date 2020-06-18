import { Component } from '@angular/core';
import {Category} from '../Category.model';
import {HttpClient} from '@angular/common/http';
import {CategoryService} from './Services/category.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BootCustom';

  public arr: Category[];

  constructor(private httpClient: HttpClient, private ctgry: CategoryService, private router: Router) {
    this.ctgry.getCategories()
      .subscribe(
        (data: Category[]) => {
          this.arr = data;
        }, (error) =>  {
          console.log(error);
        }
      );
  }

  getLink(id) {
    this.router.navigate(['/category'], {queryParams: {id}});
  }
}
