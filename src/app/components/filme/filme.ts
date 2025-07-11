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

  filme1 = {
    nome: "A bruxa",
    imagem: "/thewitch.jpg",
    sinopse: "Num ambiente isolado de um vilarejo (ou floresta, dependendo da versão), uma jovem ou família enfrenta forças misteriosas e sobrenaturais ligadas à bruxaria. É um horror psicológico tenso, focado em atmosfera sombria, paranoia e rituais ocultos.",
    favorito: false

  }

  filme2 = {
    nome: "Haloween - A noite do terror",
    imagem: "/halloween.jpg",
    sinopse: "Em Haddonfield, Illinois, Michael Myers, que matou a irmã quando tinha 6 anos, escapa de um hospício 15 anos depois, vindo aterrorizar Laurie Strode e seus amigos na noite de Halloween. Um slasher clássico, puro e direto: o mal não busca razão, apenas destruição"

  }
  filme3 = {
    nome: "Nosferatu.jpg",
    imagem: "/nosferatu",
    sinopse: "Um remake gótico assinado por Robert Eggers. Em 1838, Ellen Hutter, uma jovem atormentada por sonhos estranhos, e seu marido, Thomas, que viaja à Transilvânia para fechar um negócio, despertam o vampiro Conde Orlok. Ele fica obcecado por Ellen e traz maldição, peste e terror para a pacata Wisborg, explorando obsessão, pactos sombrios e horror visual imersivo"

  }
}
