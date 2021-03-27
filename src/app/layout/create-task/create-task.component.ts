import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {
  createTaskForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createTaskForm = this.fb.group({
      taskName: [],
      remark: [],
      description: []
    })
  }


  fileChangeEvent(event: any): void {
    const file: File = event.target.files[0];
    const fileExt = this.getFileFormat(file);

  }

  getFileFormat(file: any) {
    return file.name.split('.').pop();
  }


  submitForms() {
    console.log(this.createTaskForm.value);

  }

}
