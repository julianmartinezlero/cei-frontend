import {Component, Inject, OnInit} from '@angular/core';
import {TreatmentService} from '../../question-test/treatment.service';
import {MAT_DIALOG_DATA} from '@angular/material';
import {Treatment} from '../../../interfaces/models/treatment.model';
import {CalendarOptions, FullCalendarModule} from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid'; // useful for typechecking
FullCalendarModule.registerPlugins([
  dayGridPlugin, interactionPlugin,
  timeGridPlugin,
]);

@Component({
  selector: 'app-child-treatment-tracing',
  templateUrl: './child-treatment-tracing.component.html',
  styleUrls: ['./child-treatment-tracing.component.scss']
})
export class ChildTreatmentTracingComponent implements OnInit {
  treatments: Treatment[];

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    locale: 'es',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: 'event 1', date: '2021-04-01' },
      { title: 'event 2', date: '2021-04-02' }
    ]
  };
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private treatmentService: TreatmentService) { }

  ngOnInit() {
    this.treatmentService.get(`${this.data.id}/tracing`).subscribe((a: any) => {
      this.treatments = a;
    });
  }
  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr);
  }

}
