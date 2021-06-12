import { MatDialogConfig } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { UpdateUserComponent } from './../update-user/update-user.component';
import { Component, OnInit , Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/class/user'
import { ServiceUserService } from 'src/app/service/service-user.service';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent implements OnInit {
  data : any ;
  constructor(private GetUserService : ServiceUserService,private route: Router) { 
  }

  ngOnInit() {
    this.getuserdataByApi();
  }

  getuserdataByApi()
  {
      this.GetUserService.getData().subscribe((result)=>{this.data=result;} )
  }
 
  onUpdate(id : any)
  {
    console.warn(id);
    this.route.navigate(['/updateUser/'],
      { queryParams : {'userid' : id }}
      
    );
  }
  onDelete(id : any)
  {
    if(confirm("Are you sure to delete ")) {
      this.GetUserService.deleteData(id).subscribe();
      location.reload();
    } 
  }
}
