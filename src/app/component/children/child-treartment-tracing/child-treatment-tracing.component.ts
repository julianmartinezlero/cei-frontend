import {AfterViewInit, Component, Inject, OnInit, ViewChild} from '@angular/core';
import {TreatmentService} from '../../question-test/treatment.service';
import {MAT_DIALOG_DATA, MatDialog, MatSnackBar} from '@angular/material';
import {CalendarOptions, FullCalendarComponent, FullCalendarModule} from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import {TreatmentChildSession} from '../../../interfaces/models/TreatmentChildSession.model';
import * as moment from 'moment';
import {Child} from '../../../interfaces/models/child.model';
import {ChildEventDetailsComponent} from '../child-event-details/child-event-details.component';
import {VERTICAL_POSITION} from '../../../../environments/environment'; // useful for typechecking
FullCalendarModule.registerPlugins([
  dayGridPlugin, interactionPlugin,
  timeGridPlugin,
]);

@Component({
  selector: 'app-child-treatment-tracing',
  templateUrl: './child-treatment-tracing.component.html',
  styleUrls: ['./child-treatment-tracing.component.scss']
})
export class ChildTreatmentTracingComponent implements OnInit, AfterViewInit {
  treatmentSessions: TreatmentChildSession[];
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    locale: 'es',
    buttonText: {
      today: 'Hoy',
      month: 'Mes',
      week: 'Semana',
      day: 'Día',
      list: 'Lista'
    },
    handleWindowResize: true,
    windowResizeDelay: 500,
    eventClick: this.handleDateClick.bind(this),
    // eventMouseLeave: this.mouseLeave.bind(this),
    allDayText: 'Todos los Dias',
    // themeSystem: 'material',
    height: '100%',
    events: [],
    eventClassNames: 'active'
  };
  child: Child;
  calendarApi;
  @ViewChild('calendar', {static: false}) calendarComponent: FullCalendarComponent;
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialog: MatDialog,
    private snack: MatSnackBar,
    private treatmentService: TreatmentService) {
    this.child = this.data.child;
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.calendarApi = this.calendarComponent.getApi();
    this.loadCalendar();
  }

  loadCalendar() {
    this.treatmentService.get(`${this.data.id}/tracing`).subscribe((a: any) => {
      this.treatmentSessions = a;
      this.mapDataToEvents(a).then(r => {
        this.calendarComponent.getApi().setOption('events', r);
      }).finally(() => {
        setTimeout(() => {
          this.calendarComponent.getApi().render();
        }, 50);
      });
    });
  }

  handleDateClick(evt) {
    this.dialog.open(ChildEventDetailsComponent, {
      width: '500px',
      data: {
        ...evt.event.extendedProps
      }
    }).afterClosed().subscribe(a => {
      if (a === true) {
        this.loadCalendar();
        this.snack.open('Completado', null, {duration: 3000, verticalPosition: VERTICAL_POSITION});
      }
    });
  }

  private async mapDataToEvents(data: TreatmentChildSession[]) {
    return data
      .map(t => {
      return {
        start: t.dateIni,
        end: t.dateIni,
        title: t.treatment.text,
        state: t.state,
        session: t,
        display: 'background',
        classNames: ['custom-event-color', t.classColor, (t.state === true ? 'event-complete' : '')],
      };
    });
  }

}
