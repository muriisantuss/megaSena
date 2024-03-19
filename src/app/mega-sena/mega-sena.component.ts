import { Component } from '@angular/core';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-mega-sena',
  templateUrl: './mega-sena.component.html',
  styleUrl: './mega-sena.component.css',
})
export class MegaSenaComponent {
  number: number[] = [0,0,0,0,0,0];

  megaSena() {
    for (var a = 0; a < 6; a++) {
      this.number[a] = Math.floor(Math.random() * 61);
    }
  }
}
