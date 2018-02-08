import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { HttpModule } from '@angular/http';
import { MovieserviceService } from './shared/movieservice.service';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [MovieserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
