 import { Component } from '@angular/core';

@Component({
    selector: '.app-warning',
    template: `
    <div> This is Warning Component </div>
    <div  app-success></div>
    `,
    styles: [`
        div{
            font-size: 14px;
            color: red;
        }
    `
    ]
})
export class WarningComponent {

}