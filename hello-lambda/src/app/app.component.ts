import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { HelloService } from './hello.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit
{
  public title = 'Welcome to app!';

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private helloService: HelloService,
  ) { }

  ngOnInit()
  {
    this.helloService.hello
      .subscribe((res: string) => {
        this.title = res;
        this.changeDetectorRef.markForCheck();
      });
  }
}
