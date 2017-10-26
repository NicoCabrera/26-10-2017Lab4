import { Component, OnInit } from '@angular/core';
declare var JQuery:any;
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    $(document).ready(function(){
      $('ul.tabs').tabs();
    });

  }
}
