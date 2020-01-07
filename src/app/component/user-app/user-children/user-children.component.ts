import {Component, OnInit} from '@angular/core';
import {Child} from '../../../interfaces/models/child.model';
import {ChildrenService} from '../../children/services/children.service';
import {Professional} from '../../../interfaces/models/professional.model';
import {DialogService} from '../../alerts/dialog.service';
import {ChildrenFormComponent} from '../../children/children-form/children-form.component';
import {TestSolvedComponent} from '../../question-test/test-solved/test-solved.component';

@Component({
  selector: 'app-user-children',
  templateUrl: './user-children.component.html',
  styleUrls: ['./user-children.component.scss']
})
export class UserChildrenComponent implements OnInit {
  children: Child[] = [];
  defaultPhoto = 'https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/s32-c-fbw=1/photo.jpg';

  constructor(private childService: ChildrenService,
              private dialogService: DialogService) {
  }

  ngOnInit() {
    this.childService.getCustom(`ofTutor/all`).subscribe((res: Child[]) => {
      this.children = res;
    });
  }

  addChild() {
    this.dialogService.openDialog(ChildrenFormComponent, {
      width: '400px',
    }).subscribe(res => {
      if (res === true) {
        this.ngOnInit();
      }
    });
  }

  solved(c) {
    sessionStorage.setItem('child', JSON.stringify(c));
    this.dialogService.openDialog(TestSolvedComponent, {
      width: '800px',
      height: '100%',
    }).subscribe(res => {
      console.log(res);
    });
  }
}
