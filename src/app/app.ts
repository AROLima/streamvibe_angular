import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Footer } from './components/footer/footer';
import { Filme } from './components/filme/filme';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Filme],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'streamvibe';
}
