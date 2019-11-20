import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students;
  constructor(public service:DataService) 
  { 
    this.getData();
  }

  getData()
  {
    let stateofresult = this.service.GetData();

    stateofresult.subscribe((result)=> {
      this.students = result;
    })
  }

  ngOnInit() {
  }

}
