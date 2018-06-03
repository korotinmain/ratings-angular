import {Component, Input, Output, EventEmitter} from '@angular/core';
import {TablePersonElement} from '../../../ITablePerson';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  isVisibleDetails = false;
  marksStrings = ['Перша','Друга','Третя','Четверта','П\'ята', 'Шоста'];
  @Input() dataSource;
  @Output() click = new EventEmitter<any>();
  @Output() deletePerson = new EventEmitter<any>();
  @Output() clearPersons = new EventEmitter();


  onDeletePerson(person: TablePersonElement){
    this.deletePerson.emit(person);
  }

  onClearPersons(){
    this.clearPersons.emit();
  }
}
