import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, NG_VALIDATORS, NgModel, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { ApiService } from '../../service/api.service';
import { Observable } from 'rxjs';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-verficarplaca',
  imports: [MatFormFieldModule,MatIconModule,MatInputModule,MatButtonModule,FormsModule,NgIf,MatCardModule],
  templateUrl: './verficarplaca.component.html',
  styleUrl: './verficarplaca.component.css'
})
export class VerficarplacaComponent {
  data:Observable<any>[] = [];
  placa: string = '';
  validationResult: any;

  constructor(private apiService: ApiService) {}

  ngOnInit():void{
    this.llenarData();
    console.log("estoy vivo");
  }

  llenarData(){
    this.apiService.getData().subscribe({
      next:(result)=> {
        console.log("me estan usando");
        this.data= result;
        console.log(result);
      },
      error: (err)=>{
        console.log(err)
      }
    }
    )
  }

  onSubmit() {
    this.apiService.validatePlate(this.placa).subscribe(
      (response) => {
        this.validationResult = response;
      },
      (error) => {
        console.error('Error de validación:', error);
      }
    );
  }

}
