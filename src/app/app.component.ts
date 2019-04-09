import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  appTitleText:string = 'Super Shop';

  @ViewChild('appTitle')
  titleField: ElementRef<HTMLHeadingElement>;

  ngAfterViewInit() {
    this.titleField.nativeElement.innerHTML = this.appTitleText;
  }
}
