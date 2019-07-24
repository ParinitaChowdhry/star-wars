import { Component, Input } from '@angular/core';
import { CATEGORIES } from './category-values';
import { Category } from './category';
import { HttpClient, HttpHandler } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'star-wars';
  categories = CATEGORIES;
  selectedCat: Category;
  films: any[] = [];
  results: any[] = [];
  details: any[] = [];
  reqURL: string;

  constructor(private http: HttpClient) { }

  // get data from swapi API
  getData(selectedCat: Category) {
    this.films = [];
    this.reqURL = 'https://swapi.co/api/' + selectedCat.name + "/";
    // console.log(this.reqURL);
    this.http.get(this.reqURL).subscribe(response => {
      //  console.log(response);
      this.results = response['results'];
      for (var i = 0; i < this.results.length; i++) {
        // console.log(obj[i]);
        var key = Object.keys(this.results[i])[0];
        this.films.push(this.results[i][key]);
      }
    });
  }

  populateDetail(films: any) {
    this.details = [];
    for (var i = 0; i < this.results.length; i++) {
      var key = Object.keys(this.results[i])[0];
      var val = this.results[i][key];
      if (films == val) {
        var key1 = Object.keys(this.results[i]);

        var result1;
        // display first six keys in angular page
        for (var j = 0; j < 6; j++) {
          var item = key1[j];
          result1 = item + " : " + this.results[i][item];
          this.details.push(result1);
        }

      }
    }

  }

}
