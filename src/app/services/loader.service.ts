import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  visible = false;

  constructor() {
  }

  setLoader() {
    this.visible = !this.visible;
  }
}
