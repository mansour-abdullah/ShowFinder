import { Component, OnInit } from '@angular/core';
import { MovieserviceService } from '../shared/movieservice.service';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  public show;
  public showTitle:string;
  public showFound:boolean = false;
  public notFound:boolean = false;
  public noPoster = '/assets/images/noPoster.jpg';
  constructor(private _movieservice:MovieserviceService) {  }
  handleSuccess(data){
    if(data.hasOwnProperty('Error')){
      this.notFound = true;
      this.showFound = false;
      // do this   
      console.log('shit');
    }else{
      // do this then
    this.notFound = false;
    this.showFound = true;
    this.show = data;
    }
    
  }
  find(query:string){
    return this._movieservice.findShow(query).subscribe(
      data => this.handleSuccess(data)
    );
  }
  ngOnInit() {
  }

}
