import { Component } from '@angular/core';

@Component({
  selector: 'app-filme',
  imports: [],
  templateUrl: './filme.html',
  styleUrl: './filme.css'
})
export class Filme {

  alternarFavorito() {
    this.filme1.favorito = !this.filme1.favorito

  }

}
