import { Component, Input } from '@angular/core';
import { publish } from '../../interfaces/objects.service';
import { ProvisionalDatabaseService } from '../../interfaces/provisional_database.service';


@Component({
  selector: 'app-content',
  templateUrl: 'content.component.html',
  styleUrls: ['content.component.scss']
})

export class ContentComponent {

  @Input() publications: publish[] = [];

  @Input() change_to_form:Boolean=true;

  constructor(private provisional_database: ProvisionalDatabaseService) {

    this.publications = provisional_database.publications;

  }


  

  }