import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [
    `
      .divider:after,
      .divider:before {
        content: '';
        flex: 1;
        height: 1px;
        background: #eee;
      }
      .h-custom {
        height: calc(100% - 73px);
      }
      @media (max-width: 450px) {
        .h-custom {
          height: 100%;
        }
      }
    `,
  ],
})
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
