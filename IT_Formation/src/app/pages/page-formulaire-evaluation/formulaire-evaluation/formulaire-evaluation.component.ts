import { Component, EventEmitter, Output, NgModule } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button'; 
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-formulaire-evaluation',
  standalone: true,
  imports: [ReactiveFormsModule, MatRadioModule, FormsModule, MatButtonModule,MatIconModule,CommonModule,RouterModule],
  templateUrl: './formulaire-evaluation.component.html',
  styleUrl: './formulaire-evaluation.component.css'
})


export class FormulaireEvaluationComponent {

  evaluations: any[] = [];

  submitted: boolean = false;

 constructor(private formBuilder: FormBuilder,
 ) {}

  eval: FormGroup = this.formBuilder.group({
    salle: ['',Validators.required],
    support: ['',Validators.required],
    formateur: ['',Validators.required],
  })

  
onSubmit(): void {
  this.submitted = true;
  console.log(this.eval.value)
  console.log(this.eval.get('formateur')?.value)
  if(this.eval.valid) {
   
   this.evaluations.push(this.eval.get('salle')?.value)
   this.evaluations.push(this.eval.get('support')?.value)
   this.evaluations.push(this.eval.get('formateur')?.value)
   
    console.log(this.evaluations)
    this.eval.reset();
    this.submitted = false
     }else{
    console.log('Pas valide');
   
  }
}

get form(){
  return this.eval.controls;
}


}
