import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.scss'],
})
export class PromptComponent implements AfterViewInit {
  @ViewChild('prompt') prompt!: ElementRef;

  public validCmds: string[] = ['help', 'about', 'social', 'banner', 'error'];
  cmd: string = 'error';

  ngAfterViewInit() {
    this.prompt.nativeElement.focus();
  }

  executeCmd(promtCmd: string): void {
    this.cmd = promtCmd;
    this.prompt.nativeElement.toggleAttribute('readonly');
  }
}
