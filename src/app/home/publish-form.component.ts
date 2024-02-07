import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
selector: 'app-publish-form',
  standalone: true,
  templateUrl: './publish-form.component.html'
})
export class PublishFormComponent implements OnInit {


 

  constructor(private formBuilder: FormBuilder) {}
  publishForm: FormGroup={} as FormGroup;

  ngOnInit() {
    this.publishForm = this.formBuilder.group({
      local_id: [''],
      code: [''],
      title: [''],
      date: [''],
      description: [''],
      details: this.formBuilder.group({
        size_model: this.formBuilder.group({
          height: [''],
          width: [''],
          length: [''],
          units: ['']
        }),
        weight_model: [''],
        print_time: [''],
        number_of_parts: ['']
      }),
      cost: this.formBuilder.group({
        material: [''],
        material_cost: [''],
        minute_cost: [''],
        total_cost: ['']
      }),
      search_reference: [''],
      download_link: [''],
      image: ['']
    });
  }

  onSubmit() {
    console.log(this.publishForm.value);
  }
}
