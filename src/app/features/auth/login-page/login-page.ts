import { Component } from '@angular/core';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-login-page',
  imports: [],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {
  openCurtain = false;
  hideCurtain = false;

  showCurtain() {
    this.openCurtain = true;

    setTimeout(() => {
      this.hideCurtain = true;
    }, 1500);

    const duration = 50 * 1000;
    const animationEnd = Date.now() + duration;

    const interval = setInterval(() => {

      if (Date.now() > animationEnd) {
        return clearInterval(interval);
      }

      confetti({
        particleCount: 80,
        startVelocity: 35,
        spread: 360,
        gravity: 0.9,

        origin: {
          x: Math.random(),
          y: Math.random() - 0.2 
        }

      });

    }, 400);
  }


  proceed() {
    alert('welcome');
  }

}
