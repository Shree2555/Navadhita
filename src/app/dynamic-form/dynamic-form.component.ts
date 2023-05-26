import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  @Input() list:any;
  constructor() { }

  ngOnInit(): void {
  }

}
