import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { of } from 'rxjs';
import {ServiceService} from '../../app/service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  form: FormGroup;
  contacts: any = [];
  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      first_name: new FormControl(''),
      last_name: new FormControl(''),
      phone: new FormControl('')
    });

    this.fetch();
  }


  createContact(){
    //console.log(this.form.value);

    this.service.addContacts(this.form.value)
    .then((res)=>{
      //console.log('success');
      this.fetch();
      this.form.reset();
    })
    .catch(err=>{
      //console.log('err',err);
    })
  }

  fetch(){
    this.contacts = [];
    this.service.getConatct().subscribe(res=>{
      //console.log(res);
      this.contacts = res;
    })
  }

  delete(id){
    console.log(id);

    this.service.deleteConatact(id)
    .then((res)=>{
      //console.log('success');
      this.fetch();
    })
    .catch(err=>{
      //console.log('err',err);
    })
  }

}
