import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-formcard',
  templateUrl: './formcard.component.html',
  styleUrls: ['./formcard.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateX(100%)', opacity: 0}))
        ])
      ]
    )
  ]
})
export class FormcardComponent {

  @Input() form;

  @Input() marks;

  @Input() isVisibility;

  @Output() changeVisibility: EventEmitter<any> = new EventEmitter();
  @Output() addPerson: EventEmitter<any> = new EventEmitter();

  onAddPerson(event) {
    this.addPerson.emit(this.form);
  }
  onChangeVisibility(event){
    this.changeVisibility.emit();
  }
}
