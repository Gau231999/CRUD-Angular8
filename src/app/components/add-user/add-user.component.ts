import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/class/user'
import { ServiceUserService } from 'src/app/service/service-user.service';
import { Router,NavigationStart} from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  
  alert : boolean=false;
  user = new User('','','','','');
  regForm : FormGroup;
  constructor(private GetUserService : ServiceUserService,private route: Router) { }

  ngOnInit() {
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

  onsubmit()
  {
      this.alert=true;
      this.GetUserService.saveData(this.regForm.value).subscribe();
      //this.route.navigate(['/getUser']);
  }
}
