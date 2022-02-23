import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  show=false;
  params = new URLSearchParams(window.location.search)
  ngOnInit(): void {
    if(!this.params.has("value")){
      this.show=true
    }
    if(!sessionStorage.getItem("email")){
      this.show=true
    }
  }

}
