import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';


@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {
cocktails : any 
info: any
constructor(public cocktailService : CocktailService){}

ngOnInit():void{
  this.cocktailService.getCocktail().subscribe({
   next : (info) =>{this.info = info; 
  this.cocktails = this.info.mescocktails},
  error : ()=>{}
  
  
  });
}
}
