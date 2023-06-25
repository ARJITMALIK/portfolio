import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.scss'],
})
export class PromptComponent implements AfterViewInit {
  @ViewChild('prompt') prompt!: ElementRef;

  constructor(private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  public validCmds: string[] = [
    'help',
    'about',
    'social',
    'banner',
    'error',
    'clear',
    'userfetch',
    'rice',
    'ls',
    'projects',
    'exit',
  ];
  cmd: string = 'error';

  ngAfterViewInit() {
    this.prompt.nativeElement.focus();
  }

  executeCmd(promtCmd: string): void {
    if (promtCmd === 'clear' || promtCmd === 'c') {
      this.router.navigate(['/prompt']);
    } else if (promtCmd === 'home' || promtCmd === 'h') {
      this.router.navigate(['']);
    } else if (promtCmd === 'about') {
      this.router.navigate(['/about']);
    } else if (promtCmd === 'exit') {
      this.router.navigate(['/exit']);
      setTimeout(() => {
        window.self.close();
      }, 8000);
    } else {
      this.cmd = promtCmd;
      this.prompt.nativeElement.toggleAttribute('readonly');
    }
  }
}
