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

    const duration = 25 * 1000;
    const animationEnd = Date.now() + duration;

    const interval = setInterval(() => {
      if (Date.now() > animationEnd) {
        return clearInterval(interval);
      }

      confetti({
        particleCount: 50,
        startVelocity: 30,
        spread: 360,
        origin: { y: 0 },
        gravity: 1
      });

    }, 250);
  }


  proceed(){
    alert('welcome');
  }

}
