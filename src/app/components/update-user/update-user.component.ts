import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceUserService } from 'src/app/service/service-user.service';
import { FnParam } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  alert : boolean=false;
  regForm : FormGroup;
  data : any;
  id : BigInteger;

  constructor(private GetUserService : ServiceUserService,private router: Router,private route : ActivatedRoute) { 
  }

  ngOnInit() {
    this.route.queryParams.subscribe(
      params => { this.id = params['userid']; }
    )
    this.getUserById(this.id);
    this.regForm  = new FormGroup({
      name : new FormControl('',[Validators.required,Validators.minLength(3)]),
      email : new FormControl('',[Validators.required,Validators.email]),
      jobtitle : new FormControl('',[Validators.required]),
      phone : new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern("[7-9]{1}[0-9]{9}")]),
      gender : new FormControl('',[Validators.required])
    })
  }
  get regform()
  {
    return this.regForm.controls;
  }

  getUserById(id : any)
  {
      this.GetUserService.getDataById(id).subscribe(
        (result)=>
        {
          this.data=result;
          this.regForm.patchValue({
            name : this.data.name,
            email : this.data.email,
            jobtitle : this.data.jobtitle,
            phone : this.data.phone,
            gender : this.data.gender
          }) 
        }
      );
     
  }
  onsubmit()
  {
      this.alert=true;
      this.GetUserService.updateData(this.id,this.regForm.value).subscribe();
  }
}
