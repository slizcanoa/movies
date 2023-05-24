import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

movieTile!: string;
constructor(){}

ngOnInit(): void{

}

  buscarpeliculas(event: Event){
    event.preventDefault();
  }
}
