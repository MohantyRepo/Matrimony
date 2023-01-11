import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  constructor() {
    
  }
  file!:File;
  loading:boolean = false;
  successMag:boolean = false;
  emptyFlag:boolean = false;

  ngOnInit(): void {
   
  }

  onChange(event: any){
    this.file = event.target.files[0];
  }

  onUpload(){
    if(!this.file){
      this.emptyFlag = true;
      return;
    } else {
      this.emptyFlag = false;
    }
    this.loading = !this.loading;
    setTimeout(() => {
      this.loading = false;
      this.successMag = true;
    }, 2000);
  }

}
