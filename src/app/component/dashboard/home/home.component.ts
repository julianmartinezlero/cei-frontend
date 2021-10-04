import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images: {url: string, alt: string}[] = [
    {url: '/assets/images/im1.jpeg', alt: 'Imagen de ayuda y tratamiento para niños(as)'},
    {url: '/assets/images/im2.jpeg', alt: 'Imagen de ayuda y tratamiento para niños(as)'},
    {url: '/assets/images/im3.jpeg', alt: 'Imagen de ayuda y tratamiento para niños(as)'}
  ];
  constructor() {
  }

  ngOnInit() {
  }

}
