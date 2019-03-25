import { Component, OnInit } from '@angular/core';
import { RestService } from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'redis-angular-poc';
  users = [];
  check = false;
  constructor(private restService: RestService) {}

  ngOnInit() {
    this.restService.getAllUsers().subscribe(data => {
      console.log(data);
      this.check = true;
      // this.users = data;
      for(let e in data) {
        this.users.push(data[e])
        // console.log(data[e])
      }
    })
  }
}
