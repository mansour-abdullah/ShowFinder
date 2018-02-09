import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { ShowComponent } from './show/show.component';
import { HttpModule } from '@angular/http';
import { ShowService } from './shared/show.service';

@NgModule({
  declarations: [
    AppComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [ShowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
