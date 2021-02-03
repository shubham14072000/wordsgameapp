import { Component, OnInit } from '@angular/core';

import {FormGroup,FormControl,Validators,FormArray,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'wordsgameapp';
  // form:FormGroup;
  
  constructor( private fb: FormBuilder){}
array=[];
form=new FormGroup({
  question:new FormControl(''),
  answer:new FormControl('')
})

  error_messages = {
    question: [{ type: 'required', message: 'question is required.' }],
    answer : [{ type: 'required', message: 'answer is required.'}]
  }

ngOnInit(){

  this.form=this.fb.group({
  question:new FormControl( '', Validators.compose([Validators.required])),
  answer:new FormControl( '', Validators.compose([Validators.required]))
})

}

clear(){
  this.form.reset();
}

onSubmit(){

 if(this.form.valid){
  console.log(this.form.value);

  // this.array1.push(this.form.value.question);
  
  this.array.push(this.form.value);
  
  console.log(this.array);
  
  
  
  this.form.reset();
 }

 (error) => {
  if (this.form.valid) {
    // console.log(error.error);
    alert(error.error.message);
  }
}

}
}
