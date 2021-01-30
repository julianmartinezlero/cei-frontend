import {Component, Inject, OnInit} from '@angular/core';
import {SwiperOptions} from 'swiper';
import {ChildrenService} from '../../children/services/children.service';
import {Child} from '../../../interfaces/models/child.model';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-tutor-child',
  templateUrl: './tutor-child.component.html',
  styleUrls: ['./tutor-child.component.scss']
})
export class TutorChildComponent implements OnInit {

  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30
  };
  children: Child[] = [];
  tutorId: string;
  constructor(private childService: ChildrenService,
              @Inject(MAT_DIALOG_DATA) private data: any) {
    this.tutorId = this.data.tutor.id;
  }

  ngOnInit() {
    this.childService.getCustom(`childTutor/${this.tutorId}`).subscribe((r: any) => {
      this.children = r;
    });
  }

}
