import { Component, Type } from '@angular/core';
import { ReactiveFormsComponent } from '../components/reactive-forms/reactive-forms.component';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.scss']
})

export class StudentsPageComponent {
  dynamicComponent: Type <any> = ReactiveFormsComponent;
}
