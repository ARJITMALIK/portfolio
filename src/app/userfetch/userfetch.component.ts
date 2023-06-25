import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userfetch',
  templateUrl: './userfetch.component.html',
  styleUrls: ['./userfetch.component.scss'],
})
export class UserfetchComponent implements OnInit {
  public browser: string = '';
  public resolution: string = '';

  ngOnInit(): void {
    this.browser = this.detectBrowserName();
    this.resolution = this.detectResolution();
  }

  detectBrowserName(): string {
    const agent = window.navigator.userAgent.toLowerCase();
    switch (true) {
      case agent.indexOf('edge') > -1:
        return 'edge';
      case agent.indexOf('opr') > -1 && !!(<any>window).opr:
        return 'opera';
      case agent.indexOf('chrome') > -1 && !!(<any>window).chrome:
        return 'chrome';
      case agent.indexOf('trident') > -1:
        return 'ie';
      case agent.indexOf('firefox') > -1:
        return 'firefox';
      case agent.indexOf('safari') > -1:
        return 'safari';
      default:
        return 'other';
    }
  }

  detectResolution(): string {
    let xAxis = window.innerWidth;
    let yAxis = window.innerHeight;
    return `${xAxis}x${yAxis}`;
  }
}
