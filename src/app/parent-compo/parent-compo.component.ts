import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-compo',
  templateUrl: './parent-compo.component.html',
  styleUrls: ['./parent-compo.component.css']
})
export class ParentCompoComponent implements OnInit {

   list=[
        {
          "label":"Date of Birth (YYYY-MM-DD)",
          "key":"birthday",
          "isRequired":true,
          "order":1,
          "isReadonly":false,
          "type":"date"
        },
        {
          "label":"Gestational Age",
          "key":"gestationalAge",
          "isRequired":true,
          "order":3,
          "isReadonly":false,
          "type":"number"
        },
        {
          "label":"Sex",
          "items":[
            {
              "value":"male",
              "text":"Male"
            },
            {
              "value":"female",
              "text":"Female"
            }
          ],"key":"sex",
          "isRequired":true,
          "order":4,
          "isReadonly":false,
          "type":"dropdown"

        },
        {
          "label":"Height",
          "key":"height",
          "isRequired":true,
          "order":5,
          "isReadonly":false,
          "type":"number"
        },
        {
          "label":"Weight",
          "key":"weight",
          "isRequired":true,
          "order":6,
          "isReadonly":false,
          "type":"number"
        },
        {
          "label":"BMI",
          "key":"bmi",
          "order":11,
          "unit":"kg/m",
          "isReadonly":true,
          "type":"number"
        }

     ];
  constructor() { }

  ngOnInit(): void {

  }

}
