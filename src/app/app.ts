import { Component } from '@angular/core';
import { Header } from "./components/header/header";
import { Footer } from './components/footer/footer';
import { Filme } from './components/filme/filme';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Filme],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'streamvibe';
}
