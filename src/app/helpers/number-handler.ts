import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NumberHandler {
  generateRandomValue(baseValue: number): number {
    return Math.floor(Math.random() * baseValue);
  }
}
