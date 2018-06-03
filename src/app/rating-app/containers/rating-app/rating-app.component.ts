import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TablePersonElement} from '../../../ITablePerson';
@Component({
  selector: 'app-rating-app',
  templateUrl: './rating-app.component.html',
  styleUrls: ['./rating-app.component.scss']
})
export class RatingAppComponent {

  constructor(){}


  isVisibility = false;
  dataSource: TablePersonElement[] = [];
  marks = [
    {value: '1', viewValue: '1'},
    {value: '2', viewValue: '2'},
    {value: '3', viewValue: '3'},
    {value: '4', viewValue: '4'},
    {value: '5', viewValue: '5'},
    {value: '6', viewValue: '6'},
    {value: '7', viewValue: '7'},
    {value: '8', viewValue: '8'},
    {value: '9', viewValue: '9'},
    {value: '10', viewValue: '10'}
  ];


  form: FormGroup = new FormGroup({
    Name: new FormControl('', Validators.required),
    Mark_1: new FormControl('', Validators.required),
    Mark_2: new FormControl('', Validators.required),
    Mark_3: new FormControl('', Validators.required),
    Mark_4: new FormControl('', Validators.required),
    Mark_5: new FormControl('', Validators.required),
    Mark_6: new FormControl('', Validators.required)
  });

  addPerson(form: FormGroup) {
    this.dataSource.push({
      id: this.dataSource.length + 1,
      name: form.get('Name').value,
      marks: [
        +form.get('Mark_1').value,
        +form.get('Mark_2').value,
        +form.get('Mark_3').value,
        +form.get('Mark_4').value,
        +form.get('Mark_5').value,
        +form.get('Mark_6').value
      ],
      summ: +form.get('Mark_1').value +
      +form.get('Mark_2').value +
      +form.get('Mark_3').value +
      +form.get('Mark_4').value +
      +form.get('Mark_5').value +
      +form.get('Mark_6').value
    });
    this.dataSource.sort((n1, n2) => n2.summ - n1.summ);
    this.form.reset();
  }

  deletePerson(person: TablePersonElement) {
    let index = this.dataSource.indexOf(person);
    this.dataSource.splice(index, 1);
  }

  clearPersons() {
    this.dataSource.length = 0;
  }

  changeVisibility() {
    this.isVisibility = !this.isVisibility;
  }
}
