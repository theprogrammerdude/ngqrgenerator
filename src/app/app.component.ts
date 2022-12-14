import { Component } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  data!: string;
  public qrCodeDownloadLink: SafeUrl = '';

  constructor() {}

  onChangeURL(url: SafeUrl) {
    this.qrCodeDownloadLink = url;
  }
}
