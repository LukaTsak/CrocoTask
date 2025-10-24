import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-spinner',
  imports: [CommonModule],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss',
})
export class SpinnerComponent {
  ngOnInit() {
    let n = 10;
    let colors = this.randomGenerator(n);
    this.GlobalColors = colors;

    const circle = document.getElementById('circle');
    if (circle) {
      circle.style.background = this.createCircleSectors(n, colors);
    }
  }

  numberToStopon: number = 0;
  GlobalColors: string[] = [];

  createCircleSectors(n: number, colors: string[]): string {
    const step = 360 / n;
    let gradient = '';

    for (let i = 0; i < n; i++) {
      const start = i * step;
      const end = (i + 1) * step;
      const color = colors[i];
      gradient += `${color} ${start}deg ${end}deg${i < n - 1 ? ', ' : ''}`;
    }
    // console.log(`conic-gradient(${gradient})`);
    return `conic-gradient(${gradient})`;
  }

  randomGenerator(length: number) {
    let colorss = [];
    for (let i = 0; i < length; i++) {
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);
      colorss.push(`rgb(${r}, ${g}, ${b})`);
    }
    return colorss;
  }

  log(a: string) {
    console.log(a);
    this.numberToStopon = Number(a);
  }

  currentRotation = 0;

  spinWheel() {
    const sectorInput = this.numberToStopon;
    const circle = document.getElementById('circle')

    const n = Number(sectorInput);
    if (n < 1 || n > 10) {
      alert('Please enter a number between 1 and 10.')
      return;
    }

    const fullSpins = 5
    const sectorAngle = 36

    const targetAngle =
      360 * fullSpins + (360 - n * sectorAngle + sectorAngle / 2)

    console.log('Target Angle:', targetAngle)

    circle!.style.transition = 'transform 3s cubic-bezier(0.33, 1, 0.68, 1)'
    circle!.style.transform = `rotate(${targetAngle}deg)`

    setTimeout(() => {
      circle!.style.transition = 'none';
      circle!.style.transform = `rotate(${
        360 - n * sectorAngle + sectorAngle / 2
      }deg)`
    }, 3000)
  }
}