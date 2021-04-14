import {ChangeDetectorRef, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {SideNavService} from '../../services/side-nav.service';
import {MediaMatcher} from '@angular/cdk/layout';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;
  @Input() routes = [];

  links = ['First', 'Second', 'Third'];
  activeLink = '';
  background = '';

  constructor(private location: Location,
              private router: Router) {
    this.activeLink = this.location.path();
  }

  toggleBackground() {
    this.background = this.background ? '' : 'primary';
  }

  addLink() {
    this.links.push(`Link ${this.links.length + 1}`);
  }

  // private _mobileQueryListener: () => void;
  //
  // constructor(public sidenav: SideNavService, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
  //   this.mobileQuery = media.matchMedia('(max-width: 600px)');
  //   this._mobileQueryListener = () => changeDetectorRef.detectChanges();
  //   this.mobileQuery.addListener(this._mobileQueryListener);
  // }
  //

  ngOnDestroy(): void {
    // this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  hidden() {
  }

  ngOnInit() {
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['/']);
  }
}
