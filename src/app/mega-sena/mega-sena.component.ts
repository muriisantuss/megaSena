import { WriteVarExpr } from '@angular/compiler';
import { Component } from '@angular/core';
import { elementAt, max, min, throwError } from 'rxjs';

@Component({
  selector: 'app-mega-sena',
  templateUrl: './mega-sena.component.html',
  styleUrl: './mega-sena.component.css',
})
export class MegaSenaComponent {
  number: number[] = [0, 0, 0, 0, 0, 0];
  catch: number[] = [];
  validation: any;
  error = '';

  megaSena(maxNumber = 61) {
    this.hits(() => {
      var random = Math.floor(Math.random() * maxNumber);
      for (var a = 0; a < 6; a++) {
        this.number[a] = random;
        while (this.number.includes(random)) {
          random = Math.floor(Math.random() * maxNumber);
        }
      }
    });
  }

  hits(callback: () => void) {
    const minNumber = 0;
    const maxNumber = 60;
    const minInputs = 6;

    for (let b = minNumber; b < minInputs; b++) {
      if (this.catch[b] < minNumber || this.catch[b] > maxNumber) {
        this.error = 'Type in a number between 0 and 60';
        return;
      }
    }

    if (this.catch.length < minInputs) {
      this.error = 'Type in all inputs';
      return;
    }

    const hasDuplicate = new Set(this.catch).size !== this.catch.length;
    if (hasDuplicate) {
      this.error = 'Duplicate numbers are not allowed';
      return;
    }

    this.error = '';
    document.getElementById('howMuch')?.classList.remove('hidden');
    let intersection = this.number.filter((x) => this.catch.includes(x)).length;

    this.validation = intersection;
    callback();
  }

  reset() {
    this.catch = [];
    this.number = [];
  }
}
