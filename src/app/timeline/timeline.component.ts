import { Component, OnInit } from '@angular/core';
import { TitleService } from '../ext/title.service';
import { ActivatedRoute } from '@angular/router';
import { server } from '../models';
import { BusEventService } from '../bus-event/bus-event.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  title: string = '时间线组件';
  busevent: server.busEvent;
  constructor(private t: TitleService, private route: ActivatedRoute, private service: BusEventService) {
    t.setTitle(this.title);
    this.busevent = new Object() as server.busEvent;
  }

  ngOnInit() {
    this.getEvent();
  }

  getEvent() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getBusEventDetail(id).subscribe(data => {
      this.busevent = data;
    });
  }
}
