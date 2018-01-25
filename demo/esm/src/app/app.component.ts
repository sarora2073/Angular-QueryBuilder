import { Component } from '@angular/core';
import { QueryBuilderConfig } from '../../lib/components/query-builder';

@Component({
  selector: 'my-app',
  template: `
  <query-builder class='margin30' [data]='query' [config]='config'>
    <ng-container *queryInput="let rule; type: 'textarea'">
      <textarea class="text-input" [(ngModel)]="rule.value"></textarea>
    </ng-container>
  </query-builder>
  <div class='margin30'>
    <textarea class="output">{{query | json}}</textarea>
  </div>`,
  styles: ['.margin30 { margin: 30px; }',
    `.text-input {
      margin-top: 10px;
      width: 200px;
      height: 100px;
      display: block;
      border-radius: 4px;
      border: 1px solid #ccc;
    }`,
    `.output {
      width: 100%;
      height: 300px;
    }`]
})
export class AppComponent {
  public query = {
    condition: 'and',
    rules: [
      {field: 'age', operator: '<='},
      {field: 'birthday', operator: '>='},
      {
        condition: 'or',
        rules: [
          {field: 'gender', operator: '='},
          {field: 'occupation', operator: 'in'},
          {field: 'school', operator: 'is null'},
          {field: 'notes', operator: '='}
        ]
      }
    ]
  };
  public config: QueryBuilderConfig = {
    fields: {
      age: {name: 'Age', type: 'number'},
      gender: {
        name: 'Gender',
        type: 'category',
        options: [
          {name: 'Male', value: 'm'},
          {name: 'Female', value: 'f'}
        ]
      },
      name: {name: 'Name', type: 'string'},
      notes: {name: 'Notes', type: 'textarea', operators: ['=', '!=']},
      educated: {name: 'College Degree?', type: 'boolean'},
      birthday: {name: 'Birthday', type: 'date'},
      school: {name: 'School', type: 'string', nullable: true},
      occupation: {
        name: 'Occupation',
        type: 'string',
        options: [
          {name: 'Student', value: 'student'},
          {name: 'Teacher', value: 'teacher'},
          {name: 'Unemployed', value: 'unemployed'},
          {name: 'Scientist', value: 'scientist'}
        ]
      }
    }
  }
}