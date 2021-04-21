import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button nbButton hero status="primary"
            style="height: -webkit-fill-available;
                  width: -webkit-fill-available;
                  font-size: -webkit-xxx-large;" 
            *ngIf="!value">{{value}}
    </button>
    <button nbButton hero status="success" 
            style="height: -webkit-fill-available;
                  width: -webkit-fill-available;
                  font-size: -webkit-xxx-large;"
            *ngIf="value == 'X'" >{{value}}
    </button>
    <button nbButton hero status="info" 
            style="height: -webkit-fill-available;
                  width: -webkit-fill-available;
                  font-size: -webkit-xxx-large;"       
            *ngIf="value == 'O'" >{{value}}
    </button>
  `,
  styles: []
})
export class SquareComponent {

  @Input() value : 'X' | 'O';

}
