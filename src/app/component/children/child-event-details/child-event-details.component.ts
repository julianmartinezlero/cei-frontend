import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar, MatTreeNestedDataSource} from '@angular/material';
import {TreatmentChildSession} from '../../../interfaces/models/TreatmentChildSession.model';
import {TreatmentSessionService} from '../services/treatment-session.service';
import {TreatmentService} from '../../question-test/treatment.service';
import {NestedTreeControl} from '@angular/cdk/tree';
import {environment} from '../../../../environments/environment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-child-event-details',
  templateUrl: './child-event-details.component.html',
  styleUrls: ['./child-event-details.component.scss']
})
export class ChildEventDetailsComponent implements OnInit {
  session: TreatmentChildSession;
  resources: FilesResource[];
  dataSource: MatTreeNestedDataSource<FilesResource>;
  treeControl: NestedTreeControl<FilesResource>;
  hasChild = (_: number, node: FilesResource) => !!node.tree && node.tree.length > 0;
  constructor(@Inject(MAT_DIALOG_DATA) private data: any,
              private dialogRef: MatDialogRef<ChildEventDetailsComponent>,
              private snack: MatSnackBar,
              private router: Router,
              private treatmentService: TreatmentService,
              private treatmentSessionService: TreatmentSessionService) {
    this.session = this.data.session;
    this.dataSource = new MatTreeNestedDataSource<FilesResource>();
    this.treeControl = new NestedTreeControl<FilesResource>(tree => tree.tree);
  }

  ngOnInit() {
    this.loadResource();
  }

  completeSession() {
    this.snack.open('Marcar como Completado?', 'Aceptar', {
      duration: 5000,
      panelClass: 'white-snack',
    }).onAction().subscribe(() => {
      this.treatmentSessionService.updateSession(this.session.id).subscribe(a => {
        this.dialogRef.close(true);
      });
    });
  }

  loadResource() {
    const query = {};
    this.session.treatment.treatmentAssets.forEach((a, index, ) => {
      return query['f' + index] = a.assetType;
    });
    this.treatmentService.getQuery('resources/treatment', query).subscribe((a: any) => {
      this.resources = a;
      this.dataSource.data = a;

    });
  }

  getFile(node: FilesResource) {
    const parentPath = this.resources.find(a => a.tree.includes(node));
    window.open(`${environment.server}/treatment/resources/treatment/${node.path}?path=${parentPath.path}`, '_blank');
  }
}

export interface FilesResource {
  path: string;
  tree: FilesResource[];
}
