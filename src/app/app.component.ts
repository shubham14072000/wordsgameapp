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
  flagdropdown=false;
  indexdropdown=-1;


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
  // console.log(this.form.value);

  // this.array1.push(this.form.value.question);
  const obj={
    question:this.form.value.question,
    answer:this.form.value.answer,
    status:0
  }
  this.array.push(obj);
  
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

ondropdown(i){
  this.indexdropdown=i;
  this.flagdropdown= !this.flagdropdown;
}
oncorrect(i){
  this.array[i].status=1;

}
onwrong(i){
  this.array[i].status=2;

}

onedit(i){
  // this.form=this.array[i];
// this.form.setValue({
//   question:this.array[i].question,
//   answer:this.array[i].answer
// })
}
ondelete(index){
  this.array.splice(index,1);
}
}



