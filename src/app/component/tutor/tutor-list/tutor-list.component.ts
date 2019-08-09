import {Component, OnInit, ViewChild} from '@angular/core';
import {TutorService} from '../services/tutor.service';
import {Tutor} from '../../../interfaces/models/tutor.model';
import {MatSort, MatTableDataSource} from '@angular/material';
import {CrudComponent} from '../../../interfaces/crudComponent.interface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tutor-list',
  templateUrl: './tutor-list.component.html',
  styleUrls: ['./tutor-list.component.scss']
})
export class TutorListComponent implements OnInit, CrudComponent {
  displayedColumns: string[] = [
    'position',
    'name',
    'lastName',
    'ci',
    'cell',
    'email',
    'options'
  ];
  title = 'Tutores';
  dataSource = new MatTableDataSource<Tutor>([]);
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private tutorService: TutorService,
              private router: Router) {
  }

  ngOnInit() {
    this.all();
  }

  all() {
    this.tutorService.get().subscribe((t: Tutor[]) => {
      this.dataSource = new MatTableDataSource<Tutor>(t);
      this.dataSource.sort = this.sort;
    });
  }

  create() {
    this.router.navigate([this.tutorService.route + '/create']);
  }

  delete(id: any) {
  }

  show(id: any) {
  }

  update(value: any) {
  }

}
