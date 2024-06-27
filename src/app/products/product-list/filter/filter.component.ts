import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input()
  all:number

  @Input()
  inStock:number

  @Input()
  outStock:number

  @Output()
  filterChangedEvent:EventEmitter<string>=new EventEmitter<string>

  whichFilter="all"

  onFilterChanged(){
    this.filterChangedEvent.emit(this.whichFilter)
  }

}
