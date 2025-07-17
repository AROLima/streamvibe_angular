export interface Filme{
  titulo: string;
  imagem: string;
  sinopse: string;
  genero: string;
  favorito: boolean;
}

  const filme1: Filme = {
  titulo: "The Witch",
  imagem: "/thewitch.jpg",
  sinopse: "Na Nova Inglaterra do século XVII, uma família é banida de sua colônia e passa a viver próxima a uma floresta sombria, onde forças sobrenaturais ameaçam destruir sua fé e união.",
  genero: "Terror",
  favorito: true
};

 const filme2: Filme = {
  titulo: "Nosferatu",
  imagem: "/nosferatu.jpg",
  sinopse: "Nova reinterpretação sombria do clássico de 1922, onde uma jovem mulher é assombrada por um vampiro ancestral obcecado por ela em uma Europa do século XIX.",
  genero: "Terror gótico",
  favorito: false
};

  const filme3: Filme = {
  titulo: "Halloween",
  imagem: "/halloween.jpg",
  sinopse: "Michael Myers escapa de um hospital psiquiátrico 15 anos após assassinar sua irmã e retorna à sua cidade natal para perseguir adolescentes na noite de Halloween.",
  genero: "Slasher",
  favorito: true
};

  const filme4: Filme = {
  titulo: "Hereditário",
  imagem: "/hereditario.jpg",
  sinopse: "Após a morte da avó, uma família começa a desvendar segredos sombrios e enfrentar uma herança aterradora ligada a um culto demoníaco.",
  genero: "Terror psicológico",
  favorito: false
};

export const filme5: Filme = {
  titulo: "O Homem Invisível",
  imagem: "/ohomeminvisivel.jpg",
  sinopse: "Cecilia foge de um relacionamento abusivo, mas começa a ser assombrada por um inimigo invisível — que talvez não seja fruto da sua imaginação.",
  genero: "Suspense",
  favorito: false
};
