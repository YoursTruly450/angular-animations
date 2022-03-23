import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounce, bounceOutUp } from 'ng-animate';

@Component({
  selector: 'app-animate',
  template: `
    <button (click)="visible = !visible">Toggle</button>
    <hr/>
    <div [@bounce] class="rect" *ngIf="visible"></div>
  `,
  styleUrls: ['./animate.component.scss'],
  animations: [
    trigger('bounce', [
      transition('void => *', useAnimation(bounce)),
      transition('* => void', useAnimation(bounceOutUp, {
        params: {
          timing: 3,
          delay: .5
        }
      })),
    ])
  ]
})
export class AnimateComponent implements OnInit {

  visible = true;

  constructor() { }

  ngOnInit(): void {
  }

}
