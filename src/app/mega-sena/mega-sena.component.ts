import { Component } from '@angular/core';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-mega-sena',
  templateUrl: './mega-sena.component.html',
  styleUrl: './mega-sena.component.css',
})
export class MegaSenaComponent {
  number: number[] = [];
  catch: number[] = [];
  validation: any;

  megaSena() {
    for (var a = 0; a < 6; a++) {
      this.number[a] = Math.floor(Math.random() * 61);
    }
  }

  hits() {
    var arr1 = this.number;
    var arr2 = this.catch;
    let intersection = arr1.filter((x) => arr2.includes(x));
    this.validation = intersection.length;
  }
}
