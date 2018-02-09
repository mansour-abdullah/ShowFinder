import { Component, OnInit } from '@angular/core';
import { ShowService } from '../shared/show.service';
@Component({
  selector: 'app-movie',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  public show;
  public showTitle:string;
  public showFound:boolean = false;
  public notFound:boolean = false;
  public noPoster = 'assets/images/noPoster.jpg';
  constructor(private _showservice:ShowService) {  }
  handleSuccess(data){
    if(data.hasOwnProperty('Error')){
      this.notFound = true;
      this.showFound = false;
   
    }else{
      
    this.notFound = false;
    this.showFound = true;
    this.show = data;
    }
    
  }
  find(query:string){
    return this._showservice.findShow(query).subscribe(
      data => this.handleSuccess(data)
    );
  }
  ngOnInit() {
  }

}
