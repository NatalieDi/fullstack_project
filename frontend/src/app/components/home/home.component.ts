import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

export interface PeriodicElement {
  name: string;
  id: number;
  address: number;
  phone: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,MatCardModule,MatButtonModule,HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  jobsArray: any = []
    constructor (private httpClient: HttpClient) {
    this.httpClient.get("https://remotive.io/api/remote-jobs?category=qa&limit=20").subscribe((res:any) => {
     console.log(res)
     if (res){
     this.jobsArray = res.jobs;
     }
    })
  }
  ngOnInit(): void {
    
  }

}

