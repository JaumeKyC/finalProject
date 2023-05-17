import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-new1',
  templateUrl: './new1.component.html',
  styleUrls: ['./new1.component.css']
})
export class New1Component {

  @Input() news: any[] = [];
  @Input() new: any;
  @Input() key: number = 0;

}
