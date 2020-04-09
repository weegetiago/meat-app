import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-delivery',
  templateUrl: './delivery.component.html',
})
export class DeliveryComponent implements OnInit {

  @Input() delivery: number
  @Input() itemsValue: number

  constructor() { }

  ngOnInit() {
  }

  total(): number {
    return this.delivery + this.itemsValue
  }

}
