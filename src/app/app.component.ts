import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pipes';
  name='';  
  date='';
  doviz:number=0;
  karnum:number=0;
  cv:number=0;
  Yazma(value:string){
    this.name=value;
  }
  numara(value:string){
 this.karnum=parseFloat(value);
  }
  tarih(value:string){
this.date=value;
  }
  currency(value:string){
    this.doviz=parseFloat(value);
  }
  cvc(value:string){
    this.cv=parseFloat(value);
  }
}
