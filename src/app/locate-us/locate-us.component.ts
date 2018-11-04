import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-locate-us',
  templateUrl: './locate-us.component.html',
  styleUrls: ['./locate-us.component.scss']
})
export class LocateUsComponent implements OnInit {
  lat: number = 15.5165;
  lng: number = 73.9621;

  constructor() { }

  ngOnInit() {
  }

  launchLocationModal(): void {
    let el: HTMLElement = document.getElementById('launchLocation') as HTMLElement;
    el.click();
  }
}
