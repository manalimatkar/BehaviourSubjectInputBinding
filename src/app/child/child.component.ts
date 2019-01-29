import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {
  @Input('') parentMessage: Observable<any>;

  _message:any;

  constructor(private cd:ChangeDetectorRef) { }

  ngOnInit() {
    this.parentMessage.subscribe(data => {
      this._message = data;
      this.cd.markForCheck();
    });
  }

}
